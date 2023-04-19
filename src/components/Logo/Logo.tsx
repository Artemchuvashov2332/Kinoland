import React, { memo } from 'react';
import { Typography } from '@mui/material';

const LogoProto = () => {
  return (
    <Typography component="h1" variant="h5" color="yellow">
      Киноленд
    </Typography>
  );
};

export const Logo = memo(LogoProto);
