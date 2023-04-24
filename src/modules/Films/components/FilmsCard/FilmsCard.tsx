import React from 'react';
import { Typography } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { FilmCardBox, FilmImage, FilmRating } from './FilmsCard.styled';

//не нашел в mui подходящую под мой замысел карточку
export const FilmsCard = () => {
  return (
    <FilmCardBox>
      <FilmImage
        src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450"
        loading="lazy"
      />
      <FilmRating>
        <StarsIcon />
        <Typography>7.8</Typography>
      </FilmRating>
      <Typography>Операция фортуна</Typography>
    </FilmCardBox>
  );
};
