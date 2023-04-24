import React, { useCallback } from 'react';
import { List } from '@mui/material';
import { observer } from 'mobx-react';
import { FilmsRow } from '../index';
import { StyledCategoryName, StyledListRowItem } from './FilmsList.styled';
import { filmStoreInstance } from 'modules/Films/store';
import { Loader } from 'components/index';

const FilmsListProto = () => {
  //Костыльно, потом подумать чё с этим можно сделать!
  const filterFilmsByGenre = useCallback((category: string) => {
    return filmStoreInstance.films.filter((film) => film.category === category);
  }, []);

  return (
    <>
      <Loader isLoading={filmStoreInstance.isLoader}>
        <List>
          {filmStoreInstance.genres.map((genre) => (
            <StyledListRowItem key={genre}>
              <StyledCategoryName>Название категории</StyledCategoryName>
              <FilmsRow nameCategory={genre} filmsList={filterFilmsByGenre(genre)} />
            </StyledListRowItem>
          ))}
        </List>
      </Loader>
    </>
  );
};

export const FilmsList = observer(FilmsListProto);
