import React, { MouseEvent } from 'react';
import { List } from '@mui/material';
import { Dot } from '../Dot/index';
import { IDotsListProps } from './DotsList.types';
import { StyledCarouselDots } from './DostList.styled';

export const DotsList = ({ currSlide, slideLength, goToSlide }: IDotsListProps) => {
  const dots: number[] = [];

  for (let i = 0; i < slideLength; i++) {
    dots.push(i);
  }

  const onClickHandler = (event: MouseEvent<HTMLUListElement> & { target: HTMLButtonElement }) => {
    const number = event.target.getAttribute('data-dot');

    if (number) {
      goToSlide(Number(number));
    }
  };

  return (
    <StyledCarouselDots>
      <List onClick={onClickHandler}>
        {dots.map((dot) => (
          <Dot key={dot} number={dot} slideNumber={currSlide} />
        ))}
      </List>
    </StyledCarouselDots>
  );
};
