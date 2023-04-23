import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  StyledBannerContainer,
  StyledDescriptionStack,
  StyledDescription,
  StyledLinkButton,
  StyledInfoTypography,
  StyledFilmPoster,
} from './Banner.styled';

export const Banner = () => {
  return (
    <StyledBannerContainer>
      <StyledDescriptionStack>
        <Typography component="h1" variant="h4" textAlign="center">
          Заголовок
        </Typography>
        <Box>
          <Typography component="h4" variant="h6">
            Жанр
          </Typography>
          <StyledInfoTypography variant="body1">
            комедия, драма, мелодрамма Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit reiciendis
            sunt, nostrum excepturi mollitia dicta nam labore assumenda dolor est. Corrupti soluta voluptas, ex enim quo
            repellat praesentium excepturi alias.
          </StyledInfoTypography>
          <Typography component="h4" variant="h6">
            Рейтинг
          </Typography>
          <Typography variant="body1">7.5</Typography>
        </Box>
        <StyledDescription>
          <Typography component="h4" variant="h6">
            Описание
          </Typography>
          <Typography component="p" variant="body1">
            Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita, quaerat
            placeat nemo dolorem accusamus atque recusandae ipsam est vitae rerum obcaecati commodi nesciunt facere
            neque perspiciatis voluptates aut beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            deserunt quos dolorum fugiat distinctio, asperiores quas unde, dignissimos commodi quaerat odit. Veniam, eum
            recusandae odit pariatur inventore consequuntur unde cum.
          </Typography>
        </StyledDescription>
      </StyledDescriptionStack>
      <StyledFilmPoster>
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450" />
      </StyledFilmPoster>
      <StyledLinkButton>Подробнее</StyledLinkButton>
    </StyledBannerContainer>
  );
};
