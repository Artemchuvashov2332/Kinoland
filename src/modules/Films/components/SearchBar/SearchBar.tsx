import React from 'react';
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';
import { SearchFilter } from '../index';
import { Logo } from 'components/index';

export const SearchBar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems={'center'} marginY={1}>
      <Logo />
      <SearchFilter />
      <TextField label="Поиск" placeholder="Название фильма" size="small" />
    </Stack>
  );
};
