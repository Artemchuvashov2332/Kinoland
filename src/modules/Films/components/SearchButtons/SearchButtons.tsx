import React, { MouseEvent } from 'react';
import { ISearchButtonsProps } from './SearchButtons.types';
import { StyledButtonGroup, StyledFilterButton } from './SearchButtons.styled';
import { SEARCH_FILTER } from 'constants/index';

export const SearchButtons = ({ onClick, refs }: ISearchButtonsProps) => {
  const onClickHandler = (event: MouseEvent<HTMLInputElement> & { target: HTMLButtonElement }) => {
    if (event.target.textContent) onClick(event.target.textContent);
  };

  return (
    <StyledButtonGroup onClick={onClickHandler}>
      <StyledFilterButton variant="text" color="inherit" ref={refs[0]}>
        {SEARCH_FILTER.Films}
      </StyledFilterButton>
      <StyledFilterButton variant="text" color="inherit" ref={refs[1]}>
        {SEARCH_FILTER.Series}
      </StyledFilterButton>
      <StyledFilterButton variant="text" color="inherit" ref={refs[2]}>
        {SEARCH_FILTER.TV_Show}
      </StyledFilterButton>
      <StyledFilterButton variant="text" color="inherit">
        {SEARCH_FILTER.Best}
      </StyledFilterButton>
    </StyledButtonGroup>
  );
};
