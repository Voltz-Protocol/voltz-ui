import { providers, Wallet } from 'ethers';

import { Token, RateOracle, AMM } from '../../src';
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

    // const fixedLow = 4.05;
    // const fixedHigh = 11.02;

    // const notional = 357094;

    // try {
    //     const mintMarginRequirement = (await ammWallet.getMinimumMarginRequirementPostMint({
    //         fixedLow,
    //         fixedHigh,
    //         margin: 0,
    //         notional,
    //     })) as number;

    //     await ammWallet.mint({
    //         fixedLow,
    //         fixedHigh,
    //         margin: mintMarginRequirement,
    //         notional,
    //     });
    // } catch (error: any) {
    //     console.log(error.message);
    // }

    const fixedLows = [2, 7, 5, 10, 11];
    const fixedHighs = [12, 10, 9, 15, 45];
    const notionals = [500000, 40000, 30000, 600000, 1000000];

    for (let i = 0; i < 100; i += 1) {
        console.log("step " + i.toString());
        const fixedLow = fixedLows[i % fixedLows.length];
        const fixedHigh = fixedHighs[i % fixedHighs.length];
        const notional = notionals[i % notionals.length];

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
            if (error.message.toString().includes("Unrecognized error")) {
                break;
            }
        }
    }
};

setup();
