import React, { MouseEvent, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { filmStoreInstance } from '../../store/index';
import { SearchButtons } from '../index';
import {
  StyledButton,
  StyledFilterBar,
  StyledFilterMenu,
  StyledListCategory,
  StyledListItemCategory,
} from './SearchFilter.styled';
import { PATH_LIST, SEARCH_FILM_URL_PARAMS } from 'constants/index';
import { YearsFilmMock } from '__mocks__/Films.mock';
import { useOpenSearchPanel } from 'src/hooks';

const SearchFilterProto = () => {
  const typeFilmButtonRef = useRef<HTMLButtonElement>(null);
  const typeSeriesButtonRef = useRef<HTMLButtonElement>(null);
  const typeTVShowRef = useRef<HTMLButtonElement>(null);
  const filterPanelref = useRef<HTMLDivElement>(null);
  const [isHover, currType] = useOpenSearchPanel<HTMLElement>([
    typeFilmButtonRef,
    typeSeriesButtonRef,
    filterPanelref,
    typeTVShowRef,
  ]);
  const navigate = useNavigate();

  const onClickHandler = (type: string) => {
    navigate(`${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.TYPE}=${type}`);
  };

  const onClickCategoryHandler = (event: MouseEvent<HTMLInputElement> & { target: HTMLButtonElement }) => {
    navigate(
      `${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.TYPE}=${currType}&${SEARCH_FILM_URL_PARAMS.CATEGORY}=${event.target.dataset.id}`
    );
  };

  const onClickCountryHandler = (event: MouseEvent<HTMLInputElement> & { target: HTMLButtonElement }) => {
    navigate(
      `${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.TYPE}=${currType}&${SEARCH_FILM_URL_PARAMS.COUNTRY}=${event.target.dataset.id}`
    );
  };

  const onClickYearHandler = (event: MouseEvent<HTMLInputElement> & { target: HTMLButtonElement }) => {
    navigate(
      `${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.TYPE}=${currType}&${SEARCH_FILM_URL_PARAMS.YEAR}=${event.target.dataset.id}`
    );
  };

  return (
    <StyledFilterBar isOpen={isHover}>
      <SearchButtons onClick={onClickHandler} refs={[typeFilmButtonRef, typeSeriesButtonRef, typeTVShowRef]} />

      <StyledFilterMenu isOpen={isHover} ref={filterPanelref}>
        <Typography component={'h1'} variant={'h5'} padding={'2px 16px'}>
          {currType}
        </Typography>
        <Stack direction={'row'}>
          <Box width={'40%'}>
            <Typography component={'h3'} variant={'h6'} padding={'2px 16px'}>
              Жанры
            </Typography>
            <StyledListCategory onClick={onClickCategoryHandler}>
              {filmStoreInstance.genres.map((genre) => (
                <StyledListItemCategory key={genre.id}>
                  <StyledButton variant="text" data-id={genre.id}>
                    {genre.genre}
                  </StyledButton>
                </StyledListItemCategory>
              ))}
            </StyledListCategory>
          </Box>
          <Box width={'40%'}>
            <Typography component={'h3'} variant={'h6'} padding={'2px 16px'}>
              Страны
            </Typography>
            <StyledListCategory onClick={onClickCountryHandler}>
              <StyledListItemCategory key={34}>
                <StyledButton variant="text" data-id={34}>
                  {'Россия'}
                </StyledButton>
              </StyledListItemCategory>
              {filmStoreInstance.countries.map((country, index) => {
                if (index < filmStoreInstance.genres.length)
                  return (
                    <StyledListItemCategory key={country.id}>
                      <StyledButton variant="text" data-id={country.id}>
                        {country.country}
                      </StyledButton>
                    </StyledListItemCategory>
                  );
              })}
            </StyledListCategory>
          </Box>
          <Box width={'20%'}>
            <Typography component={'h3'} variant={'h6'} padding={'2px 16px'}>
              По годам
            </Typography>
            <StyledListCategory onClick={onClickYearHandler}>
              {YearsFilmMock.map((year) => (
                <StyledListItemCategory key={year}>
                  <StyledButton variant="text" data-id={year} size="small">
                    {year}
                  </StyledButton>
                </StyledListItemCategory>
              ))}
            </StyledListCategory>
          </Box>
        </Stack>
      </StyledFilterMenu>
    </StyledFilterBar>
  );
};

export const SearchFilter = observer(SearchFilterProto);
