import React, { memo } from 'react';
import { FilmItem } from '../index';
import { StyledListRow, StyledBoxItem, StyledCategoryName } from './FilmsRow.styled';
import { IFilmsRowProps } from './FilmsRow.types';

const FilmsRowProto = ({ filmsList, nameCategory }: IFilmsRowProps) => {
  return (
    <StyledBoxItem>
      <StyledCategoryName>{nameCategory}</StyledCategoryName>
      <StyledListRow>
        {filmsList.map((film) => (
          <FilmItem key={`${film.id}${nameCategory}`} film={film} />
        ))}
      </StyledListRow>
    </StyledBoxItem>
  );
};

export const FilmsRow = memo(FilmsRowProto);
