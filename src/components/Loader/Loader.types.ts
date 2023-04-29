import { CircularProgressProps, SkeletonProps } from '@mui/material';
import React from 'react';

interface ILoader {
  isLoading: boolean;
  children?: React.ReactNode;
}

export type TypeLoader = 'progress' | 'sketeton';

export type ILoaderProps<T extends TypeLoader> = ILoader & {
  typeLoader?: T;
  props?: T extends 'progress' ? CircularProgressProps : SkeletonProps;
};
