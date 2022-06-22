import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';
import { Panel } from '@components/atomic';
import { Position } from '@voltz-protocol/v1-sdk';
import SummaryPanel from 'src/components/atomic/SummaryPanel/SummaryPanel';
import { formatCurrency } from '@utilities';
import { BigNumber } from 'ethers';
import { useAMMContext } from '@hooks';
import { colors }  from '@theme';

export type SwapFormCurrentPositionProps = {
  position: Position;
};

const SwapFormCurrentPosition: React.FunctionComponent<SwapFormCurrentPositionProps> = ({
  position
}) => {
  const bottomSpacing: SystemStyleObject<Theme> = {
    marginBottom: (theme) => theme.spacing(6)
  }
  const { positionInfo } = useAMMContext();

  const notional = Math.abs(position.effectiveVariableTokenBalance);
  const margin = position.amm.descale(BigNumber.from(position.margin.toString()));
  const leverage = notional / margin;
  const underlyingTokenName = position.amm.underlyingToken.name || '';

  const getHealthFactor = () => {
    
    if(positionInfo.loading) {
      return 'loading...';
    } else {
      let healthColour = '';
      let text = '';

      switch(positionInfo.result?.healthFactor) {
        case 1: {
          healthColour = colors.vzCustomRed1;
          text = 'DANGER';
          break;
        }
        case 2: {
          healthColour = colors.vzCustomYellow1;
          text = 'WARNING';
          break;
        }
        case 3: {
          healthColour = colors.vzCustomGreen2;
          text = 'HEALTHY';
          break;
        }
      }

      return (
        <span style={{color: healthColour}}>
          {text}
        </span>
      );
    }
    
  }

  useEffect(() => {
    positionInfo.call(position);
  }, [position]);

  return (
    <Box>
      <Panel
        variant="dark"
        sx={{
          marginTop: 12,
          marginRight: (theme) => theme.spacing(2),
          width: (theme) => theme.spacing(97),
        }}
      >
        <SummaryPanel label="Position information" rows={[
          {
            label: 'NOTIONAL',
            value: `${formatCurrency(notional)} ${underlyingTokenName}`
          },
          {
            label: 'LEVERAGE',
            value: `${formatCurrency(leverage)}x`
          },
          {
            label: 'HEALTH FACTOR',
            value: positionInfo.loading ? 'loading...' : getHealthFactor(),
          },
          {
            label: 'CURRENT MARGIN',
            value: `${formatCurrency(margin)} ${underlyingTokenName}`,
            highlight: true
          },
        ]} />
      </Panel>
    </Box>
  );
};

export default SwapFormCurrentPosition;
