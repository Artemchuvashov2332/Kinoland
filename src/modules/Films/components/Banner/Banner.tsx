import React, { memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  StyledBannerContainer,
  StyledDescriptionStack,
  StyledLinkButton,
  StyledInfoText,
  StyledFilmPoster,
} from './Banner.styled';
import { IBannerProps } from './Banner.types';

const BannerProto = ({ film }: IBannerProps) => {
  const { name, year, countries, posterUrl, rating } = film.data;
  const { category } = film;

  return (
    <StyledBannerContainer>
      <StyledDescriptionStack>
        <Typography component="h1" variant="h4" textAlign="center">
          {name}
        </Typography>
        <Stack spacing={5}>
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
          {rating !== 'Неизвестно' && (
            <Box>
              <Typography component="h4" variant="h6" display={'inline-block'}>
                Рейтинг:
              </Typography>
              <StyledInfoText>{rating}</StyledInfoText>
            </Box>
          )}
          <Box>
            <Typography component="h4" variant="h6" display={'inline-block'}>
              Года:
            </Typography>
            <StyledInfoText>{year}</StyledInfoText>
          </Box>
        </Stack>
      </StyledDescriptionStack>
      <StyledFilmPoster>
        <img src={posterUrl} width={'100%'} height={'100%'} loading="lazy" />
      </StyledFilmPoster>
      <StyledLinkButton>Подробнее</StyledLinkButton>
    </StyledBannerContainer>
  );
};

export const Banner = memo(BannerProto);
