import React, { useEffect } from 'react';
import { SearchFilmsList } from './components/index';
import { searchFilmsStoreInstance } from './store/index';

export const SearchFilms = () => {
  // useEffect(() => {
  //   searchFilmsStoreInstance.loadGenresCountries();
  // }, []);
  /*заготовка под панель с фильтрами*/

  return (
    <>
      <SearchFilmsList />
    </>
  );
};
