import React from 'react';
import Box from '@mui/material/Box';
// import { SystemStyleObject } from '@mui/system';
// import { Theme } from '@mui/material';
import { SwapInfo, SwapInfoEditMargin } from './components';
import { InfoPostSwap } from '@voltz-protocol/v1-sdk';
import { SwapFormActions, SwapFormModes } from '../SwapForm/types';
import { isUndefined } from 'lodash';

export type SwapFormPostInfoProps = {
  balance?: number;
  formAction: SwapFormActions;
  minRequiredMargin?: number;
  mode: SwapFormModes;
  positionMargin?: number;
  protocol?: string;
  swapInfo: InfoPostSwap | void | null;
  swapInfoLoading: boolean;
  underlyingTokenName?: string;
};

const SwapFormPostInfo: React.FunctionComponent<SwapFormPostInfoProps> = ({
  balance,
  formAction,
  minRequiredMargin,
  mode,
  positionMargin,
  protocol,
  swapInfo,
  swapInfoLoading,
  underlyingTokenName,
}) => {
  // const bottomSpacing: SystemStyleObject<Theme> = {
  //   marginBottom: (theme) => theme.spacing(6)
  // }

  return (
    <Box sx={{
      marginLeft: (theme) => theme.spacing(2),
      padding: (theme) => theme.spacing(6),
      width: (theme) => theme.spacing(97),
      boxSizing: 'border-box'
    }}>
      {mode === SwapFormModes.NEW_POSITION && (swapInfo || swapInfoLoading) && (
        <Box>
          <SwapInfo
            data={swapInfo} 
            loading={swapInfoLoading} 
            underlyingTokenName={underlyingTokenName}
            yieldBearingTokenName={protocol}
            formAction={formAction}
          />
        </Box>
      )}
      {mode === SwapFormModes.EDIT_MARGIN && !isUndefined(minRequiredMargin) && !isUndefined(positionMargin) && (
        <Box>
          <SwapInfoEditMargin 
            balance={balance}
            minRequiredMargin={minRequiredMargin}
            positionMargin={positionMargin}
            underlyingTokenName={underlyingTokenName}
          />
        </Box>
      )}
    </Box>
  );
};

export default SwapFormPostInfo;
