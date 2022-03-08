import { AMM } from '@voltz/v1-sdk';

import { AMMTableDatum } from '../types';
import timestampWadToDateTime from './timestampWadToDateTime';

const mapAmmToAmmTableDatum = ({
  id,
  protocol,
  termStartTimestamp,
  termEndTimestamp,
  fixedRate,
}: AMM): AMMTableDatum => {
  return {
    id,
    protocol,
    startDate: timestampWadToDateTime(termStartTimestamp),
    endDate: timestampWadToDateTime(termEndTimestamp),
    // fixedApr: parseFloat(fixedRate.toFixed(2)), // todo: fix type
    fixedApr: 15,
    variableApr: 5,
  };
};

export default mapAmmToAmmTableDatum;
