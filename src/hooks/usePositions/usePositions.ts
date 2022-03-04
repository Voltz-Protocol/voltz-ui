import { DeepPartial } from 'utility-types';
import { Position as PositionSDK } from '@voltz/v1-sdk';
import { useGetPositionsQuery, Position_OrderBy } from '@graphql';

export type UsePositionArgs = {};

export type UsePositionsResult = {
    positions?: DeepPartial<PositionSDK>[];
    loading: boolean;
    error: boolean;
  };

  const usePositions = (): UsePositionsResult => {
    const { data, loading, error } = useGetPositionsQuery({ variables: { orderBy: Position_OrderBy.Id } });
    
    if (!data) {
      return { loading, error: !!error };
    }

    const positions = data.positions.map(
      ({
        id,
        createdTimestamp:createdTimestamp,
        updatedTimestamp,
        amm,
        owner,
        tickLower,
        tickUpper,
        liquidity,
        margin,
        fixedTokenBalance,
        variableTokenBalance,
        isLiquidityProvider,
        isSettled, 
        isEmpty
      }) =>
        new PositionSDK({
                id: id,
                createdTimestamp: createdTimestamp,
                updatedTimestamp: updatedTimestamp,
                ammId: amm.id,
                owner: owner.id,
                liquidity: liquidity,
                tickLower: tickLower.value, // do we represent this as a tick entity?
                tickUpper: tickUpper.value,
                isSettled: isSettled,
                margin: margin,
                fixedTokenBalance: fixedTokenBalance,
                variableTokenBalance: variableTokenBalance,
                isLiquidityProvider: isLiquidityProvider,
                isEmpty: isEmpty,
              })
    );
        

    return { positions, loading, error: !!error };


  }
  
  export default usePositions;

