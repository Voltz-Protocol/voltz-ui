import { DeepPartial } from 'utility-types';
import { Swap } from '@voltz/v1-sdk';
import { MintOrBurn } from '@voltz/v1-sdk';
import { useGetBurnsQuery, useGetMintsQuery, useGetSwapsQuery } from '@graphql';

export type UseTradesArgs = {
    positionId: string;
};

export type UseTradesResult = {
    swaps?: DeepPartial<Swap>[];
    mints?: DeepPartial<MintOrBurn>[];
    burns?: DeepPartial<MintOrBurn>[];
    loadingSwaps: boolean;
    errorSwaps: boolean;
    loadingMints: boolean;
    errorMints: boolean;
    loadingBurns: boolean;
    errorBurns: boolean;
  };


const useTrades = ({
    positionId
} : UseTradesArgs): UseTradesResult => {

    let { data:dataSwaps, loading:loadingSwaps, error:errorSwaps } = useGetSwapsQuery({ variables: {positionId: positionId } });
    let swaps: Swap[] = [];
    
    
    if (dataSwaps) {
      swaps = dataSwaps.swaps.map(
        ({
          id,
          transaction,
          amm,
          position,
          sender,
          txIndex,
          sqrtPriceX96,
          liquidity,
          tick
        }) =>
          new Swap({
                id: id,
                transactionId: transaction.id,
                transactionBlockNumber: transaction.blockNumber,
                transactionTimestamp: transaction.timestamp,
                ammId: amm.id,
                positionId: position.id,
                sender: sender,
                txIndex: txIndex,
                sqrtPriceX96: sqrtPriceX96,
                liquidity: liquidity,
                tick: tick,
                })
      );
      
    }

    let { data:dataMints, loading:loadingMints, error:errorMints } = useGetMintsQuery({ variables: {positionId: positionId } });
    let mints: MintOrBurn[] = [];

    // todo: if amount is an absolute number need an additional boolean for the sdk enitity called isMint
    if (dataMints) {
      mints = dataMints.mints.map(
        ({
          id,
          transaction,
          amm,
          position,
          sender,
          amount
        }) =>
          new MintOrBurn({
                id: id,
                transactionId: transaction.id,
                transactionBlockNumber: transaction.blockNumber,
                transactionTimestamp: transaction.timestamp,
                ammId: amm.id,
                positionId: position.id,
                sender: sender,
                amount: amount
            })
      );
    }

    let { data:dataBurns, loading:loadingBurns, error:errorBurns } = useGetBurnsQuery({ variables: {positionId: positionId } });
    let burns: MintOrBurn[] = [];

    if (dataBurns) {
      burns = dataBurns.burns.map(
        ({
          id,
          transaction,
          amm,
          position,
          sender,
          amount
        }) =>
          new MintOrBurn({
                id: id,
                transactionId: transaction.id,
                transactionBlockNumber: transaction.blockNumber,
                transactionTimestamp: transaction.timestamp,
                ammId: amm.id,
                positionId: position.id,
                sender: sender,
                amount: amount
            })
      );
    }

    return { swaps, mints, burns, loadingSwaps, errorSwaps: !!errorSwaps, loadingMints, errorMints:!!errorMints, loadingBurns, errorBurns:!!errorBurns };


  }
  
export default useTrades;

