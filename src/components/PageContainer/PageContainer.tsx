import React from 'react';
import { Container } from '@mui/material';
import { IPageContainerProps } from './PageContainer.types';

export const PageContainer = ({ children }: IPageContainerProps) => {
  return <Container maxWidth="xl">{children}</Container>;
};
