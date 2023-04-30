import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { searchFilmsStoreInstance } from '../../store/index';
import { SearchFilmListItem } from '../index';
import { StyledLoaderBox } from './SearchFilmsList.styled';
import { IFilmsType, ISearchParamsEntity } from 'domains/index';
import { SEARCH_FILM_URL_PARAMS } from 'constants/index';
import { Loader } from 'components/index';

let isFetch = false;
let searchPage = 1;

const SearchFilmsListProto = () => {
  const [searchParams] = useSearchParams();

  const searchType = searchParams.get(SEARCH_FILM_URL_PARAMS.TYPE);
  const searchCategories = searchParams.get(SEARCH_FILM_URL_PARAMS.CATEGORY);
  const searchYear = searchParams.get(SEARCH_FILM_URL_PARAMS.YEAR);
  const searchKeyword = searchParams.get(SEARCH_FILM_URL_PARAMS.KEYWORD);

  const params: ISearchParamsEntity = {
    type: searchType ? (searchType as IFilmsType[keyof IFilmsType]) : undefined,
    categories: searchCategories ? { id: Number(searchCategories) } : undefined,
    year: searchYear ? Number(searchYear) : undefined,
    keyword: searchKeyword ? searchKeyword : undefined,
  };

  useEffect(() => {
    searchFilmsStoreInstance.clearSearchFilms();
    searchPage = 1;
    searchFilmsStoreInstance.loadFilmsByParams({ ...params, page: searchPage });
  }, []);

  const handleScroll = () => {
    if (!isFetch || searchPage >= searchFilmsStoreInstance.searchFilms.maxPage) return;

    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      searchPage += 1;
      searchFilmsStoreInstance.loadFilmsByParams({ ...params, page: searchPage });
      isFetch = false;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    isFetch = true;
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
