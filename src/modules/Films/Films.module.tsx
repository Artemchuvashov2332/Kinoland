import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { observer } from 'mobx-react';
import { Banner, FilmsList, SearchBar } from './components';
import { filmStoreInstance } from './store/index';
import { Carousel } from 'components/index';

const FilmsProto = () => {
  useEffect(() => {
    filmStoreInstance.loadTopFilms();
    filmStoreInstance.loadGenresCountries();
  }, []);
  return (
    <>
      <Container>
        <SearchBar />
        <Carousel width={'100%'} height={'600px'} autoPlay={false} autoPlayTime={5000} arrow={true} dots={true}>
          {filmStoreInstance.topFilms.map((film) => (
            <Banner key={film.data.id} film={film} />
          ))}
        </Carousel>
      </Container>
      <FilmsList />
    </>
  );
};

export const Films = observer(FilmsProto);
