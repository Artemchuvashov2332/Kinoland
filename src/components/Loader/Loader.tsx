import React from 'react';
import { CircularProgress, Skeleton } from '@mui/material';
import { ILoaderProgres, ILoaderSkeleton } from './Loader.types';

export const Loader = ({ isLoading, children, typeLoader = 'progress', props }: ILoaderProgres | ILoaderSkeleton) => {
  return (
    <>
      {isLoading ? (
        <>
          {typeLoader === 'progress' && <CircularProgress {...(props as ILoaderProgres['props'])} />}
          {typeLoader === 'sketeton' && <Skeleton {...(props as ILoaderSkeleton['props'])} />}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
