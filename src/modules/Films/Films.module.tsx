import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { observer } from 'mobx-react';
import { Banner, FilmsList, SearchBar } from './components';
import { filmStoreInstance } from './store/index';

const FilmsProto = () => {
  useEffect(() => {
    filmStoreInstance.loadFilms();
    filmStoreInstance.loadTopFilms();
    filmStoreInstance.loadGenresYears();
  }, []);
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

export const Films = observer(FilmsProto);
