import React from 'react';
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';
import { SearchFilter } from '../index';
import { Logo } from 'components/index';

export const SearchBar = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Logo />
      <SearchFilter />
      <TextField label="Поиск" placeholder="Название фильма" size="small" />
    </Stack>
  );
};
