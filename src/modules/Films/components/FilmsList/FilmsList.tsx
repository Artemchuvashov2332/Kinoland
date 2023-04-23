import React from 'react';
import { List } from '@mui/material';
import { FilmsRow } from '../index';
import { StyledCategoryName, StyledListRowItem } from './FilmsList.styled';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const FilmsList = () => {
  return (
    <List>
      {arr.map((el) => (
        <StyledListRowItem key={el}>
          <StyledCategoryName>Название категории</StyledCategoryName>
          <FilmsRow />
        </StyledListRowItem>
      ))}
    </List>
  );
};
