import React, { useCallback } from 'react';
import isUndefined from 'lodash/isUndefined';
import Box from '@mui/material/Box';

import DebouncedIntegerField, {
  DebouncedIntegerFieldDetails,
} from '../DebouncedIntegerField/DebouncedIntegerField';
import IconLabel from '../IconLabel/IconLabel';

export type RateOptionsProps = {
  defaultFixedLow?: number;
  defaultFixedHigh?: number;
  fixedLow?: number;
  fixedHigh?: number;
  onChangeFixedLow: (value: number, increment: boolean) => void;
  onChangeFixedHigh: (value: number, increment: boolean) => void;
};

const RateOptions: React.FunctionComponent<RateOptionsProps> = ({
  defaultFixedLow,
  defaultFixedHigh,
  fixedLow,
  fixedHigh,
  onChangeFixedLow,
  onChangeFixedHigh,
}) => {
  const fixedLowValue = isUndefined(fixedLow) ? defaultFixedLow : fixedLow;
  const fixedHighValue = isUndefined(fixedHigh) ? defaultFixedHigh : fixedHigh;

  const handleChangeFixedLow = useCallback(
    (newFixedLow: string | undefined, details?: DebouncedIntegerFieldDetails) => {
      onChangeFixedLow(parseFloat(newFixedLow || '1'), details?.increment || false);
    },
    [onChangeFixedLow],
  );
  const handleChangeFixedHigh = useCallback(
    (newFixedHigh: string | undefined, details?: DebouncedIntegerFieldDetails) => {
      onChangeFixedHigh(parseFloat(newFixedHigh || '1'), details?.increment || false);
    },
    [onChangeFixedHigh],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        '& > *:not(:last-child)': { marginRight: (theme) => theme.spacing(10) },
        flexDirection: 'row',
      }}
    >
      <DebouncedIntegerField
        size="small"
        label={<IconLabel label="fixed low" icon="information-circle" info="Something" />}
        value={fixedLowValue}
        onChange={handleChangeFixedLow}
      />
      <DebouncedIntegerField
        size="small"
        label={<IconLabel label="fixed high" icon="information-circle" info="Something" />}
        value={fixedHighValue}
        onChange={handleChangeFixedHigh}
      />
    </Box>
  );
};

export default RateOptions;
