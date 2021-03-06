import React from 'react';
import { Button, Typography } from '@components/atomic';
import { isUndefined } from 'lodash';
import { SystemStyleObject, Theme } from '@mui/system';

export type NotionalProps = {
  notional?: string;
  onEdit?: () => void;
  token: string;
};

const Notional: React.FunctionComponent<NotionalProps> = ({ notional, onEdit, token }) => {
  return (
    <>
      <Typography variant="body2" label="Notional" sx={{ fontSize: 18 }}>
        {isUndefined(notional) ? 'No data' : `${notional} ${token}`}
      </Typography>

      {onEdit && (
        <Button sx={{ width: '100%', display: 'flex'}} size='small' variant='red2' onClick={onEdit}> 
          Edit
        </Button>
      )}
    </>
  );
};
    
export default Notional;