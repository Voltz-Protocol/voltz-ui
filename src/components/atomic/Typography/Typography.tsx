import React from 'react';
import { SystemStyleObject, Theme } from '@mui/system';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

import { withLabel } from '../../utilities';

export type TypographyProps = MuiTypographyProps;

const Typography: React.FunctionComponent<TypographyProps> = ({ ...props }) => {
  return <MuiTypography {...props} />;
};

export default withLabel<TypographyProps>(Typography);