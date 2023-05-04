import React from 'react';
import { observer } from 'mobx-react';
import { Box, Stack, Typography } from '@mui/material';
import { StyledFilmImageBox, StyledFilmInfoStack, StyledInfoText } from './FilmInfo.styled';
import { singleFilmStoreInstance } from 'modules/SingleFilm/store';

const FilmInfoProto = () => {
  const { category, data } = singleFilmStoreInstance.filmData;
  const { name, posterUrl, countries, year, rating, description } = data;
  return (
    <Box paddingX={2} marginY={2}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Stack direction={'row'} flexWrap={'wrap'} mt={4}>
        <StyledFilmImageBox>
          <img src={posterUrl} width={'100%'} height={'100%'} loading="lazy" />
        </StyledFilmImageBox>

        <StyledFilmInfoStack>
          <Box>
            <Typography component="h4" variant="h6" display={'inline-block'}>
              Жанры:
            </Typography>
            <StyledInfoText>{category}</StyledInfoText>
          </Box>
          <Box>
            <Typography component="h4" variant="h6" display={'inline-block'}>
              Страны:
            </Typography>
            <StyledInfoText>{countries}</StyledInfoText>
          </Box>

          <Box>
            <Typography component="h4" variant="h6" display={'inline-block'}>
              Рейтинг:
            </Typography>
            <StyledInfoText>{rating}</StyledInfoText>
          </Box>

          <Box>
            <Typography component="h4" variant="h6" display={'inline-block'}>
              Год:
            </Typography>
            <StyledInfoText>{year}</StyledInfoText>
          </Box>
        </StyledFilmInfoStack>

        <Box width={'100%'} mt={2}>
          <Typography component="h4" variant="h6">
            Описание
          </Typography>
          <Typography component="p" variant="body2">
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export const FilmInfo = observer(FilmInfoProto);
