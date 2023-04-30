import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { FilmsRow } from '../index';
import { filmStoreInstance } from '../../store/index';
import { StyledLoaderBox } from './FilmsList.styled';
import { Loader } from 'components/index';

const FilmsListProto = () => {
  const isFetchRes = useRef(false);

  useEffect(() => {
    filmStoreInstance.loarRandomFilm();
  }, []);

  const handleScroll = () => {
    if (!isFetchRes.current) return;

    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      filmStoreInstance.loarRandomFilm();
      isFetchRes.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    isFetchRes.current = true;
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
