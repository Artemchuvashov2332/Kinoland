import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Box } from '@mui/material';
import { singleFilmStoreInstance } from '../../store/index';

const PlayerProto = () => {
  const filmId = singleFilmStoreInstance.filmData.data.id;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://yohoho.cc/yo.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box width={'90%'} marginX={'auto'} height={'65vh'}>
      <video id="yohoho" data-kinopoisk={filmId} controls data-resize="1">
        <source src="//yohoho.cc/yo.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};

export const Player = observer(PlayerProto);
