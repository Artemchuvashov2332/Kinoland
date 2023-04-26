import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import {
  StyledBannerContainer,
  StyledDescriptionStack,
  StyledDescription,
  StyledLinkButton,
  StyledInfoTypography,
  StyledFilmPoster,
} from './Banner.styled';
import { IBannerProps } from './Banner.types';

const BannerProto = ({ film }: IBannerProps) => {
  const { name, posterUrl, rating, description } = film.data;
  const { category } = film;

  return (
    <StyledBannerContainer>
      <StyledDescriptionStack>
        <Typography component="h1" variant="h4" textAlign="center">
          {name}
        </Typography>
        <Box>
          <Typography component="h4" variant="h6">
            Жанр
          </Typography>
          <StyledInfoTypography variant="body1">{category}</StyledInfoTypography>
          <Typography component="h4" variant="h6">
            Рейтинг
          </Typography>
          <Typography variant="body1">{rating}</Typography>
        </Box>
        <StyledDescription>
          <Typography component="h4" variant="h6">
            Описание
          </Typography>
          <Typography component="p" variant="body1">
            {description}
          </Typography>
        </StyledDescription>
      </StyledDescriptionStack>
      <StyledFilmPoster>
        <img src={posterUrl} width={'100%'} loading="lazy" />
      </StyledFilmPoster>
      <StyledLinkButton>Подробнее</StyledLinkButton>
    </StyledBannerContainer>
  );
};

export const Banner = memo(BannerProto);
