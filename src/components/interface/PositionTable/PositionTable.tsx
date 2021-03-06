import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { colors, SystemStyleObject, Theme } from '@theme';
import { Position, PositionInfo } from '@voltz-protocol/v1-sdk';

import { AugmentedAMM, data, findCurrentAmm, findCurrentPosition } from '@utilities';
import { Panel } from '@components/atomic';
import { PositionTableFields } from './types';
import { PositionTableHead, PositionTableRow } from './components';
import { Agents, AMMProvider } from '@contexts';
import TransactionList from '../TransactionList/TransactionList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useAgent, useAMMs } from '@hooks';

export type PositionTableProps = {
  positions: Position[];
  positionInformation: Record<Position['id'], PositionInfo>;
  order: data.TableOrder;
  onSetOrder: (order: data.TableOrder) => void;
  orderBy: PositionTableFields;
  onSetOrderBy: (orderBy: PositionTableFields) => void;
  page: number;
  pages: number;
  onSetPage: (page: number) => void;
  size: number | null;
  onSetSize: (size: number) => void;
  onSelectItem: (datum: Position, mode: 'margin' | 'liquidity' | 'rollover') => void;
  agent: Agents
  onSettle: (position: Position) => void;
};

const PositionTable: React.FunctionComponent<PositionTableProps> = ({
  positions,
  positionInformation,
  onSelectItem,
  onSettle
}) => {
  const { amms } = useAMMs();
  const { agent } = useAgent();
  
  const commonOverrides: SystemStyleObject<Theme> = {
    '& .MuiTableCell-root': {
      borderColor: 'transparent',
      paddingRight: (theme) => theme.spacing(4),
      paddingLeft: (theme) => theme.spacing(4),
      paddingTop: (theme) => theme.spacing(2),
      paddingBottom: (theme) => theme.spacing(1),
      '&:first-of-type': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      '&:last-of-type': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
    },
    '.MuiInputLabel-root': {
      marginBottom: (theme) => theme.spacing(1)
    },
  };

  const listItemStyles: SystemStyleObject<Theme> = {
    padding: '0', 
    margin: '0',
    marginTop: (theme) => theme.spacing(6),

    '&:first-of-type': {
      marginTop: '0'
    }
  }

  const getMaturedTableBorderStyles = (positionType: number) => {
    const base = { borderRadius: '8px' };
    
    switch(positionType) {
      case 1: {
        return { 
          ...base, 
          border: `1px solid ${colors.skyBlueCrayola.base}` 
        };
      }
      case 2:
      case 3: {
        return { 
          ...base, 
          border: `1px solid ${colors.lavenderWeb.base}` 
        };
      }
    }
  }
  
  const handleSelectRow = (index: number, mode: 'margin' | 'liquidity' | 'rollover') => {
    onSelectItem(positions[index], mode);
  };

  return (
    <>
      {positions.length > 0 && (
        <List sx={{ padding: '0', margin: '0' }}>
          {positions.map((pos, index) => {
            const info = positionInformation[pos.id];
            const rolloverAmm = findCurrentAmm(amms || [], pos);
            const rolloverAvailable = rolloverAmm && rolloverAmm.id !== pos.amm.id;

            return (
              <ListItem sx={listItemStyles} key={pos.id}>
                <Panel variant='main' sx={{ width: '100%', padding: (theme) => `0 ${theme.spacing(4)}` }}>
                  <PositionTableHead
                    currencyCode='USD'
                    currencySymbol='$'
                    isFCM={pos.source === 'FCM'}
                    fees={agent === Agents.LIQUIDITY_PROVIDER ? info?.fees : undefined}
                    feesPositive={true}
                    beforeMaturity={info?.beforeMaturity}
                    healthFactor={info?.healthFactor}
                    isSettled={pos.isSettled}
                    currentFixedRate={(agent === Agents.LIQUIDITY_PROVIDER) ? info?.fixedApr : undefined}
                    positionType={pos.positionType}
                    onRollover={() => handleSelectRow(index, 'rollover')}
                    onSettle={() => onSettle(pos)}
                    rolloverAmm={rolloverAvailable ? rolloverAmm : undefined}
                  />

                  <TableContainer sx={(!info?.beforeMaturity && !pos.isSettled) ? getMaturedTableBorderStyles(pos.positionType) : undefined}>
                    <Table size="medium" sx={{ ...commonOverrides }}>
                      <TableBody>
                        <AMMProvider amm={(pos.amm as AugmentedAMM)}>
                          <PositionTableRow
                            position={pos}
                            positionInfo={info}
                            key={pos.id}
                            index={index}
                            onSelect={(mode: 'margin' | 'liquidity') => handleSelectRow(index, mode)}
                          />
                        </AMMProvider>
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <TransactionList position={pos} />

                </Panel>
              </ListItem>
            )}
          )}
        </List>
      )}
    </>
  );
};

export default PositionTable;
