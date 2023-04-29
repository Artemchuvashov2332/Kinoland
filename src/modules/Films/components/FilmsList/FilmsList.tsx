import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { FilmsRow } from '../index';
import { filmStoreInstance } from '../../store/index';
import { StyledLoaderBox } from './FilmsList.styled';
import { Loader } from 'components/index';

let isFetch = false;

const FilmsListProto = () => {
  useEffect(() => {
    filmStoreInstance.loarRandomFilm();
  }, []);

  const handleScroll = () => {
    if (!isFetch) return;

    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      filmStoreInstance.loarRandomFilm();
      isFetch = false;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    isFetch = true;
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filmStoreInstance.filmsByCategory.length]);

  return (
    <>
      {filmStoreInstance.filmsByCategory.map((films) => (
        <FilmsRow key={films.category} nameCategory={films.category} filmsList={films.items} />
      ))}
      <StyledLoaderBox>
        <Loader isLoading={filmStoreInstance.isLoader} typeLoader="progress" props={{ color: 'warning' }}></Loader>
      </StyledLoaderBox>
    </>
  );
};

export const FilmsList = observer(FilmsListProto);
