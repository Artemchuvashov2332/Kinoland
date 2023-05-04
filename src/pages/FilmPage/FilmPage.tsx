import React from 'react';
import { PageContainer } from 'components/index';
import { SingleFilm } from 'modules/SingleFilm';

export const FilmPage = () => {
  return (
    <PageContainer maxWidth={'lg'}>
      <SingleFilm />
    </PageContainer>
  );
};
