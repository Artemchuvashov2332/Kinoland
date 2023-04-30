import React, { memo } from 'react';
import { Grid } from '@mui/material';
import { ISearchFilmItemProps } from './SearchFilmListItem.types';
import { FilmsCard } from 'components/index';

const SearchFilmListItemProto = ({ film }: ISearchFilmItemProps) => {
  return (
    <Grid item xs={1} alignSelf={'center'} justifySelf={'center'}>
      <FilmsCard srcPoster={film.posterUrl} rating={film.rating} nameFilm={film.name} />
    </Grid>
  );
};

export const SearchFilmListItem = memo(SearchFilmListItemProto);
