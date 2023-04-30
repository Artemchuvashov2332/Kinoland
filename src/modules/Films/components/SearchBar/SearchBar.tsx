import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SearchFilter } from '../index';
import { Logo } from 'components/index';
import { PATH_LIST, SEARCH_FILM_URL_PARAMS } from 'constants/index';

export const SearchBar = () => {
  const [serchValue, setSerchValue] = useState<string>('');
  const navigate = useNavigate();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setSerchValue(event.target.value);
  const onSubmitHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      navigate(`${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.KEYWORD}=${serchValue}`);
    }
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems={'center'} marginY={1}>
      <Logo />
      <SearchFilter />
      <TextField
        label="Поиск"
        placeholder="Название фильма"
        size="small"
        value={serchValue}
        onChange={onChangeHandler}
        onKeyDown={onSubmitHandler}
      />
    </Stack>
  );
};
