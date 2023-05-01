import React, { MouseEvent, useRef } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { filmStoreInstance } from '../../store/index';
import { SearchButtons } from '../index';
import { StyledFilterBar, StyledFilterMenu, StyledListCategory, StyledListItemCategory } from './SearchFilter.styled';
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
          <Box width={'70%'}>
            <Typography component={'h3'} variant={'h6'} padding={'2px 16px'}>
              Жанры
            </Typography>
            <StyledListCategory onClick={onClickCategoryHandler}>
              {filmStoreInstance.genres.map((genre) => (
                <StyledListItemCategory key={genre.id}>
                  <Button variant="text" color="inherit" data-id={genre.id}>
                    {genre.genre}
                  </Button>
                </StyledListItemCategory>
              ))}
            </StyledListCategory>
          </Box>
          <Box width={'30%'}>
            <Typography component={'h3'} variant={'h6'} padding={'2px 16px'}>
              По годам
            </Typography>
            <StyledListCategory onClick={onClickYearHandler}>
              {YearsFilmMock.map((year) => (
                <StyledListItemCategory key={year}>
                  <Button variant="text" color="inherit" data-id={year}>
                    {year}
                  </Button>
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
