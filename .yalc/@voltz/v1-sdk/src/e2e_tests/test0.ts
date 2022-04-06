import { providers, Wallet } from 'ethers';
import { random } from 'lodash';

import { Token, RateOracle, AMM, InfoPostSwap } from '../../src';
import { TickMath } from '../../src/utils/tickMath';

const setup = async () => {
  const vammAddress = '0xe451980132e65465d0a498c53f0b5227326dd73f';
  const marginEngineAddress = '0x75537828f2ce51be7289709686a69cbfdbb714f1';
  const provider = new providers.JsonRpcProvider('http://0.0.0.0:8545/');
  const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
  const wallet = new Wallet(privateKey, provider);
  const other = new Wallet(
    '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
    provider,
  );

  const ammWallet = new AMM({
    id: vammAddress,
    signer: wallet,
    provider,
    createdTimestamp: '1646856471',
    fcmAddress: '0x5392a33f7f677f59e833febf4016cddd88ff9e67',
    liquidity: '0',
    marginEngineAddress,
    rateOracle: new RateOracle({
      id: '0x0165878a594ca255338adfa4d48449f69242eb8f',
      protocolId: 1,
    }),
    underlyingToken: new Token({
      id: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
      name: 'USDC',
      decimals: 18,
    }),
    sqrtPriceX96: TickMath.getSqrtRatioAtTick(0).toString(),
    termEndTimestamp: '1649458800000000000000000000',
    termStartTimestamp: '1646856441000000000000000000',
    tick: '0',
    tickSpacing: '1000',
    txCount: 0,
    updatedTimestamp: '1646856471',
  });

  const ammOther = new AMM({
    id: vammAddress,
    signer: other,
    provider,
    createdTimestamp: '1646856471',
    fcmAddress: '0x5392a33f7f677f59e833febf4016cddd88ff9e67',
    liquidity: '0',
    marginEngineAddress,
    rateOracle: new RateOracle({
      id: '0x0165878a594ca255338adfa4d48449f69242eb8f',
      protocolId: 1,
    }),
    underlyingToken: new Token({
      id: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
      name: 'USDC',
      decimals: 18,
    }),
    sqrtPriceX96: TickMath.getSqrtRatioAtTick(0).toString(),
    termEndTimestamp: '1649458800000000000000000000',
    termStartTimestamp: '1646856441000000000000000000',
    tick: '0',
    tickSpacing: '1000',
    txCount: 0,
    updatedTimestamp: '1646856471',
  });

  for (let i = 0; i < 200; i += 1) {
    const r = i < 20 ? 0 : random(0, 2);
    if (r < 1) {
      // mint
      console.log('mint');
      const fixedLow = random(2, 6);
      const fixedHigh = random(fixedLow + 1, 12);

      const notional = Math.floor(random(10000, 1000000));

      try {
        const mintMarginRequirement = (await ammWallet.getMinimumMarginRequirementPostMint({
          fixedLow,
          fixedHigh,
          margin: 0,
          notional,
        })) as number;

        await ammWallet.mint({
          fixedLow,
          fixedHigh,
          margin: mintMarginRequirement,
          notional,
        });
      } catch (error: any) {
          console.log(error.message);
          if (error.message.toString().includes("Cannot read properties of undefined")) {
              break;
          }
      }
    } else {
      console.log('swap');
      // swap
      const fixedLow = 1;
      const fixedHigh = 2;
      const notional = Math.floor(random(1000, 10000));

      try {
        const { marginRequirement: swapMarginRequirement, availableNotional } =
          (await ammOther.getInfoPostSwap({
            isFT: r < 1.5,
            notional,
            fixedLow,
            fixedHigh,
          })) as InfoPostSwap;

        const tradedNotional = Math.abs(availableNotional);

        await ammOther.swap({
          isFT: r < 1.5,
          notional: tradedNotional,
          fixedLow,
          fixedHigh,
          margin: swapMarginRequirement,
        });
      } catch (error: any) {
          console.log(error.message);
          if (error.message.toString().includes("Cannot read properties of undefined")) {
              break;
          }
      }
    }
  }
};

setup();
