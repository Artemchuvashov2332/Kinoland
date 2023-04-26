import React from 'react';
import { IconButton } from '@mui/material';
import { IDotProps } from './Dot.types';
import { StyledDotButton } from './Dot.styled';

export const Dot = ({ number, slideNumber }: IDotProps) => {
  return (
    <IconButton data-dot={number}>
      <StyledDotButton selected={number === slideNumber} fontSize="small" data-dot={number} />
    </IconButton>
  );
};
