import React from 'react';
import { Container } from '@mui/material';
import { IPageContainerProps } from './PageContainer.types';

export const PageContainer = ({ children }: IPageContainerProps) => {
  return <Container>{children}</Container>;
};
