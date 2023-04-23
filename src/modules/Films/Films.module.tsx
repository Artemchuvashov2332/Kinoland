import React from 'react';
import { Container } from '@mui/material';
import { Banner, FilmsList, SearchBar } from './components';

export const Films = () => {
  return (
    <>
      <Container>
        <SearchBar />
        <Banner />
      </Container>
      <FilmsList />
    </>
  );
};
