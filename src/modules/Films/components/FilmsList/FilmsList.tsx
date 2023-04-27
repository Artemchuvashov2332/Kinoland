import React, { useCallback, useEffect } from 'react';
import { List } from '@mui/material';
import { observer } from 'mobx-react';
import { FilmsRow } from '../index';
import { filmStoreInstance } from '../../store/index';
import { StyledCategoryName, StyledListRowItem } from './FilmsList.styled';
import { Loader } from 'components/index';

const FilmsListProto = () => {
  useEffect(() => {
    filmStoreInstance.loarRandomFilm();
  }, []);

  //Костыльно, потом подумать чё с этим можно сделать!
  const filterFilmsByGenre = useCallback((category: string) => {
    return filmStoreInstance.films.filter((film) => film.category.includes(category));
  }, []);

  return (
    <>
      <Loader isLoading={filmStoreInstance.isLoader}>
        <List>
          {filmStoreInstance.listCategory.map((category) => (
            <StyledListRowItem key={category.id}>
              <StyledCategoryName>{category.genre}</StyledCategoryName>
              <FilmsRow filmsList={filterFilmsByGenre(category.genre)} />
            </StyledListRowItem>
          ))}
        </List>
      </Loader>
    </>
  );
};

export const FilmsList = observer(FilmsListProto);
