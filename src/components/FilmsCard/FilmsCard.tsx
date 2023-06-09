import React, { memo } from 'react';
import { Typography } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { FilmCardBox, FilmImage, FilmRating, StyledFilmName } from './FilmsCard.styled';
import { IFilmsCardProps } from './FilmsCard.types';

//не нашел в mui подходящую под мой замысел карточку
const FilmsCardProto = ({ srcPoster, rating, nameFilm }: IFilmsCardProps) => {
  return (
    <FilmCardBox>
      <FilmImage src={srcPoster} loading="lazy" />
      <FilmRating>
        <StarsIcon />
        <Typography>{rating}</Typography>
      </FilmRating>
      <StyledFilmName>{nameFilm}</StyledFilmName>
    </FilmCardBox>
  );
};

export const FilmsCard = memo(FilmsCardProto);
