import React, { memo } from 'react';
import { ListItem } from '@mui/material';
import { FilmsCard } from '../index';
import { StyledListRow, StyledBoxItem, StyledCategoryName } from './FilmsRow.styled';
import { IFilmsRowProps } from './FilmsRow.types';

const FilmsRowProto = ({ filmsList, nameCategory }: IFilmsRowProps) => {
  return (
    <StyledBoxItem>
      <StyledCategoryName>{nameCategory}</StyledCategoryName>
      <StyledListRow>
        {filmsList.map((film) => (
          <ListItem key={`${film.id}${nameCategory}`}>
            <FilmsCard srcPoster={film.posterUrl} rating={film.rating} nameFilm={film.name} />
          </ListItem>
        ))}
      </StyledListRow>
    </StyledBoxItem>
  );
};

export const FilmsRow = memo(FilmsRowProto);
