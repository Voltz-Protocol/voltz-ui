import React from 'react';
import SummaryPanel from '../../../../atomic/SummaryPanel/SummaryPanel';
import { IconLabel } from '@components/composite';
import { formatCurrency, roundUpDecimal } from '@utilities';
import { isUndefined } from 'lodash';

export type SwapSummaryEditMarginProps = {
  balance?: number;
  loading?: boolean;
  minRequiredMargin: number;
  positionMargin: number;
  underlyingTokenName?: string; 
};

const SwapSummaryEditMargin: React.FunctionComponent<SwapSummaryEditMarginProps> = ({ balance, loading = false, minRequiredMargin, positionMargin, underlyingTokenName = '' }) => {

  const label = <IconLabel
    label="trade information"
    icon="information-circle"
    info="Your minimum required margin is defined based on your leverage and notional amount traded. You are required to deposit margin in order to execute a trade."
  />;

  const rows = !isUndefined(minRequiredMargin) ? [
    {
      label: 'MINIMUM REQUIRED MARGIN:', 
      value: `${formatCurrency(roundUpDecimal(minRequiredMargin, 4), true)} ${underlyingTokenName}`,
      highlight: true
    },
    {
      label: 'POSITION MARGIN:', 
      value: `${formatCurrency(positionMargin, true)} ${underlyingTokenName}`
    },
    {
      label: 'WALLET BALANCE:', 
      value: !isUndefined(balance) ? `${formatCurrency(Math.abs(balance), true)} ${underlyingTokenName}` : 'NO DATA'
    },
  ] : undefined;

  return <SummaryPanel label={label} loading={loading} rows={rows} />
};

export default SwapSummaryEditMargin;