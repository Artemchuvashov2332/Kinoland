import React from 'react';
import { ListItem } from '@mui/material';
import { FilmsCard } from '../index';
import { StyledListRow } from './FilmsRow.styled';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const FilmsRow = () => {
  return (
    <StyledListRow>
      {arr.map((el) => (
        <ListItem key={el}>
          <FilmsCard />
        </ListItem>
      ))}
    </StyledListRow>
  );
};
