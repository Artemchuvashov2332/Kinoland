import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { FilmInfo, Player } from './components';
import { singleFilmStoreInstance } from './store/index';
import { StyledFilmBox } from './SingleFilm.styled';

const SingleFilmProto = () => {
  const { filmId } = useParams();

  useEffect(() => {
    if (filmId) {
      singleFilmStoreInstance.loadFilmDataById(filmId);
    }
  }, []);

  return (
    <StyledFilmBox>
      <FilmInfo />
      <Player />
    </StyledFilmBox>
  );
};

export const SingleFilm = observer(SingleFilmProto);
