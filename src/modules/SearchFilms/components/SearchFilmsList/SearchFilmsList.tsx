import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { searchFilmsStoreInstance } from '../../store/index';
import { SearchFilmListItem } from '../index';
import { StyledLoaderBox } from './SearchFilmsList.styled';
import { IFilmsType, ISearchParamsEntity } from 'domains/index';
import { SEARCH_FILM_URL_PARAMS } from 'constants/index';
import { Loader } from 'components/index';

const SearchFilmsListProto = () => {
  const [searchParams] = useSearchParams();
  const isFetchRef = useRef(false);
  const searchPageRef = useRef(1);

  const searchType = searchParams.get(SEARCH_FILM_URL_PARAMS.TYPE);
  const searchCategories = searchParams.get(SEARCH_FILM_URL_PARAMS.CATEGORY);
  const searchCountries = searchParams.get(SEARCH_FILM_URL_PARAMS.COUNTRY);
  const searchYear = searchParams.get(SEARCH_FILM_URL_PARAMS.YEAR);
  const searchKeyword = searchParams.get(SEARCH_FILM_URL_PARAMS.KEYWORD);

  const params: ISearchParamsEntity = {
    type: searchType ? (searchType as IFilmsType[keyof IFilmsType]) : undefined,
    categories: searchCategories ? { id: Number(searchCategories) } : undefined,
    countries: searchCountries ? { id: Number(searchCountries) } : undefined,
    year: searchYear ? Number(searchYear) : undefined,
    keyword: searchKeyword ? searchKeyword : undefined,
  };

  useEffect(() => {
    searchFilmsStoreInstance.clearSearchFilms();
    searchPageRef.current = 1;
    searchFilmsStoreInstance.loadFilmsByParams({ ...params, page: searchPageRef.current });
  }, []);

  const handleScroll = () => {
    if (!isFetchRef.current || searchPageRef.current >= searchFilmsStoreInstance.searchFilms.maxPage) return;

    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      searchPageRef.current += 1;
      searchFilmsStoreInstance.loadFilmsByParams({ ...params, page: searchPageRef.current });
      isFetchRef.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    isFetchRef.current = true;
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchFilmsStoreInstance.searchFilms.items.length]);

  return (
    <>
      <Grid container columns={{ xs: 1, sm: 2, md: 4, lg: 5, xl: 6 }} rowSpacing={2}>
        {searchFilmsStoreInstance.searchFilms.items.map((film) => (
          <SearchFilmListItem key={film.id} film={film} />
        ))}
      </Grid>
      <StyledLoaderBox>
        <Loader
          isLoading={searchFilmsStoreInstance.isLoader}
          typeLoader="progress"
          props={{ color: 'warning' }}></Loader>
      </StyledLoaderBox>
    </>
  );
};

export const SearchFilmsList = observer(SearchFilmsListProto);
