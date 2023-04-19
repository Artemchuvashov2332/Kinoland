import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH_LIST } from 'constants/index';
import { FilmPage, HomePage, SearchPage } from 'pages/index';

export const Router = () => {
  return (
    <Routes>
      <Route path={PATH_LIST.ROOT} element={<HomePage />} />
      <Route path={PATH_LIST.SEARCH_ROUTE} element={<SearchPage />} />
      <Route path={PATH_LIST.FILM_ROUTE} element={<FilmPage />} />
    </Routes>
  );
};
