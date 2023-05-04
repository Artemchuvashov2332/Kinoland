import React from 'react';
import { Container } from '@mui/material';
import { IPageContainerProps } from './PageContainer.types';

export const PageContainer = ({ children, maxWidth = 'xl' }: IPageContainerProps) => {
  return <Container maxWidth={maxWidth}>{children}</Container>;
};
