import React from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { SearchFilms } from 'modules/index';

export const SearchPage = () => {
  return (
    <PageContainer>
      <Typography component={'h1'} variant={'h3'}>
        Страница поиска
      </Typography>
      <SearchFilms />
    </PageContainer>
  );
};
