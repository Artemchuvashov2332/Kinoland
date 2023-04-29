import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { observer } from 'mobx-react';
import { BannerList, FilmsList, SearchBar } from './components';
import { filmStoreInstance } from './store/index';

const FilmsProto = () => {
  useEffect(() => {
    filmStoreInstance.loadGenresCountries();
  }, []);
  return (
    <>
      <Container>
        <SearchBar />
        <BannerList />
      </Container>
      <FilmsList />
    </>
  );
};

export const Films = observer(FilmsProto);
