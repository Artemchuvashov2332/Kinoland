import React from 'react';
import { StyledFilterBar, StyledFilterButton, StyledFilterMenu } from './SearchFilter.styled';
import { SEARCH_FILTER } from 'constants/index';

export const SearchFilter = () => {
  return (
    <StyledFilterBar>
      {Object.values(SEARCH_FILTER).map((type) => (
        <StyledFilterButton key={type} variant="text" color="inherit">
          {type}
        </StyledFilterButton>
      ))}
      <StyledFilterMenu className={'filter-menu'}>
        Тест ТестТестТест v Тест Тест v v v v Тест v v vv Тестv v v v v Тест Тест Тест LO lorem*50
      </StyledFilterMenu>
    </StyledFilterBar>
  );
};
