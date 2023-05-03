import React, { memo } from 'react';
import { Grid, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ISearchFilmItemProps } from './SearchFilmListItem.types';
import { FilmsCard } from 'components/index';
import { ROOT, FILM } from 'constants/index';

const SearchFilmListItemProto = ({ film }: ISearchFilmItemProps) => {
  return (
    <Grid item xs={1} alignSelf={'center'} justifySelf={'center'}>
      <ListItem component={Link} to={`${ROOT}${FILM}/${film.id}`}>
        <FilmsCard srcPoster={film.posterUrl} rating={film.rating} nameFilm={film.name} />
      </ListItem>
    </Grid>
  );
};

export const SearchFilmListItem = memo(SearchFilmListItemProto);
