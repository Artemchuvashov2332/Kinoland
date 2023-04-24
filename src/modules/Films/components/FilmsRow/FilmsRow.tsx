import React, { memo } from 'react';
import { ListItem } from '@mui/material';
import { FilmsCard } from '../index';
import { StyledListRow } from './FilmsRow.styled';
import { IFilmsRowProps } from './FilmsRow.types';

const FilmsRowProto = ({ nameCategory, filmsList }: IFilmsRowProps) => {
  return (
    <StyledListRow>
      {nameCategory}
      {filmsList.map((film) => (
        <ListItem key={film.data.id}>
          <FilmsCard srcPoster={film.data.posterUrl} rating={film.data.rating} nameFilm={film.data.name} />
        </ListItem>
      ))}
    </StyledListRow>
  );
};

export const FilmsRow = memo(FilmsRowProto);
