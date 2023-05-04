import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { FilmInfo, Player } from './components/index';
import { singleFilmStoreInstance } from './store/index';
import { StyledFilmBox, StyledLoaderCenterScreen } from './SingleFilm.styled';
import { Loader } from 'components/index';

const SingleFilmProto = () => {
  const { filmId } = useParams();

  useEffect(() => {
    if (filmId) {
      singleFilmStoreInstance.loadFilmDataById(filmId);
    }
  }, []);

  if (singleFilmStoreInstance.isLoader) {
    return (
      <StyledLoaderCenterScreen>
        <Loader
          isLoading={singleFilmStoreInstance.isLoader}
          typeLoader="progress"
          props={{ color: 'warning' }}></Loader>
      </StyledLoaderCenterScreen>
    );
  }

  return (
    <StyledFilmBox>
      <FilmInfo />
      <Player />
    </StyledFilmBox>
  );
};

export const SingleFilm = observer(SingleFilmProto);
