import React, { memo } from 'react';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { IFilmItemProps } from './FilmItem.types';
import { FilmsCard } from 'components/index';
import { ROOT, FILM } from 'constants/index';

const FilmItemProto = ({ film }: IFilmItemProps) => {
  return (
    <ListItem component={Link} to={`${ROOT}${FILM}/${film.id}`}>
      <FilmsCard srcPoster={film.posterUrl} rating={film.rating} nameFilm={film.name} />
    </ListItem>
  );
};

export const FilmItem = memo(FilmItemProto);
