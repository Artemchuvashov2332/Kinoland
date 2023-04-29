import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Box } from '@mui/material';
import { filmStoreInstance } from '../../store/index';
import { Banner } from '../index';
import { Carousel, Loader } from 'components/index';

const BannerListProto = () => {
  useEffect(() => {
    filmStoreInstance.loadTopFilms();
  }, []);

  return (
    <Box margin={'8px 0'}>
      <Loader
        isLoading={!filmStoreInstance.topFilms.length}
        typeLoader="sketeton"
        props={{ variant: 'rounded', width: '100%', height: '600px', animation: 'wave' }}>
        <Carousel width={'100%'} height={'600px'} autoPlay={true} autoPlayTime={7000} arrow={true} dots={true}>
          {filmStoreInstance.topFilms.map((film) => (
            <Banner key={film.data.id} film={film} />
          ))}
        </Carousel>
      </Loader>
    </Box>
  );
};

export const BannerList = observer(BannerListProto);
