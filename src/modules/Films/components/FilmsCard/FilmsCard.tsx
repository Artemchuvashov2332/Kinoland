import React from 'react';
import { Box } from '@mui/system';
import { ImageButton } from './FilmsCard.styled';

//не нашел в mui подходящую под мой замысел карточку
export const FilmsCard = () => {
  return (
    <Box>
      <ImageButton>
        <img
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450"
          width="100%"
        />
      </ImageButton>
    </Box>
  );
};
