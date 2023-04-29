import React, { memo } from 'react';
import { CircularProgress, Skeleton } from '@mui/material';
import { ILoaderProps, TypeLoader } from './Loader.types';

export const LoaderProto = ({ isLoading, children, typeLoader = 'progress', props }: ILoaderProps<TypeLoader>) => {
  return (
    <>
      {isLoading ? (
        <>
          {typeLoader === 'progress' && <CircularProgress {...(props as ILoaderProps<'progress'>['props'])} />}
          {typeLoader === 'sketeton' && <Skeleton {...(props as ILoaderProps<'sketeton'>['props'])} />}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export const Loader = memo(LoaderProto);
