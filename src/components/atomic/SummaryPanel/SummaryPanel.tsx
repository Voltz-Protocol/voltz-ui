import React, { ReactNode } from 'react';
import { Box, SystemStyleObject, Theme } from '@mui/system';
import { Typography } from '@components/atomic';
import colors from '../../../theme/colors';

interface SummaryPanelProps {
  label?: ReactNode;
  loading?: boolean;
  rows?: {label: string; value: ReactNode, highlight?: boolean}[];
}

const SummaryPanel = ({ label, loading, rows }: SummaryPanelProps) => {
  const containerStyles: SystemStyleObject<Theme> = {
    border: `1px solid ${colors.lavenderWeb.darken040}`,
    borderRadius: (theme) => theme.spacing(1),
    padding: (theme) => theme.spacing(4),
  };
  const rowStyles: SystemStyleObject<Theme> = {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
    width: '100%',
  };
  const valueStyles: SystemStyleObject<Theme> = {
    whiteSpace: 'nowrap',
  };

  if (loading) {
    return <Typography agentStyling variant="body2">Loading...</Typography>
  }

  if (rows) {
    return (
      <Box sx={containerStyles}>
        {rows.map((row, index) => (
          <Box sx={rowStyles} key={row.label}>
            <Typography 
              variant="body2" 
              label={index === 0 ? label : undefined} 
              sx={{ 
                color: row.highlight ? colors.lavenderWeb.base : colors.lavenderWeb.darken015,
              }}
            >
              {row.label}
            </Typography>
            <Typography agentStyling={row.highlight} variant="body2" sx={{
              ...valueStyles,
              color: row.highlight ? undefined : colors.lavenderWeb.darken015,
            }}>
              {row.value}
            </Typography>
          </Box>
        ))}
      </Box>
    )
  }

  return null;
}

export default SummaryPanel;