import { CircularProgressProps, SkeletonProps } from '@mui/material';
import React from 'react';

interface ILoader {
  isLoading: boolean;
  children?: React.ReactNode;
}

export interface ILoaderProgres extends ILoader {
  typeLoader?: 'progress';
  props?: CircularProgressProps;
}

export interface ILoaderSkeleton extends ILoader {
  typeLoader?: 'sketeton';
  props?: SkeletonProps;
}
