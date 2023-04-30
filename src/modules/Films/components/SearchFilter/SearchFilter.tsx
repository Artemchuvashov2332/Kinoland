import React, { MouseEvent, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { filmStoreInstance } from '../../store/index';
import {
  StyledFilterBar,
  StyledFilterButton,
  StyledFilterMenu,
  StyledListCategory,
  StyledListItemCategory,
} from './SearchFilter.styled';
import { PATH_LIST, SEARCH_FILM_URL_PARAMS, SEARCH_FILTER } from 'constants/index';
import { SearchFilmTypes } from 'domains/index';
import { YearsFilmMock } from '__mocks__/Films.mock';

const SearchFilterProto = () => {
  const [selectType, setSelectType] = useState<SearchFilmTypes>(SEARCH_FILTER.Films);
  const navigate = useNavigate();

  const mouseEnterHandler = (event: MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }) =>
    setSelectType(event.target.textContent as SearchFilmTypes);

  const onClickCategoryHandler = (event: MouseEvent<HTMLInputElement> & { target: HTMLButtonElement }) => {
    navigate(
      `${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.TYPE}=${selectType}&${SEARCH_FILM_URL_PARAMS.CATEGORY}=${event.target.dataset.id}`
    );
  };

  const onClickYearHandler = (event: MouseEvent<HTMLInputElement> & { target: HTMLButtonElement }) => {
    navigate(
      `${PATH_LIST.SEARCH_ROUTE}?${SEARCH_FILM_URL_PARAMS.TYPE}=${selectType}&${SEARCH_FILM_URL_PARAMS.YEAR}=${event.target.dataset.id}`
    );
  };

  return (
    <StyledFilterBar>
      {Object.values(SEARCH_FILTER).map((type) => (
        <StyledFilterButton key={type} variant="text" color="inherit" onMouseEnter={mouseEnterHandler}>
          {type}
        </StyledFilterButton>
      ))}
      <StyledFilterMenu className={'filter-menu'}>
        <Typography component={'h1'} variant={'h5'} padding={'2px 16px'}>
          {selectType}
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
