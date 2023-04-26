import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { StyledIconButtonNext, StyledIconButtonPrev } from './Arrows.styled';
import { IArrowProps } from './Arrows.types';

export const Arrows = ({ changeSlide }: IArrowProps) => {
  return (
    <>
      <StyledIconButtonPrev onClick={() => changeSlide(-1)}>
        <ArrowBackIosNewIcon />
      </StyledIconButtonPrev>
      <StyledIconButtonNext onClick={() => changeSlide(1)}>
        <ArrowForwardIosIcon />
      </StyledIconButtonNext>
    </>
  );
};
