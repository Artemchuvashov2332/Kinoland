import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { FilmsRow } from '../index';
import { filmStoreInstance } from '../../store/index';
import { StyledBoxItem, StyledCategoryName, StyledLoaderBox } from './FilmsList.styled';
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
  }, [filmStoreInstance.films]);

  //Костыльно, потом подумать чё с этим можно сделать!
  const filterFilmsByGenre = (category: string) => {
    return filmStoreInstance.films.filter((film) => film.category.includes(category));
  };

  return (
    <>
      {filmStoreInstance.listCategory.map((category) => (
        <StyledBoxItem key={category.id}>
          <StyledCategoryName>{category.genre}</StyledCategoryName>
          <FilmsRow nameCategory={category.genre} filmsList={filterFilmsByGenre(category.genre)} />
        </StyledBoxItem>
      ))}
      <StyledLoaderBox>
        <Loader isLoading={filmStoreInstance.isLoader}></Loader>
      </StyledLoaderBox>
    </>
  );
};

export const FilmsList = observer(FilmsListProto);
