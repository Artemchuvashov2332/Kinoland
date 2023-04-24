import { PropsWithChildren } from 'react';

export interface IFilmsCardProps extends PropsWithChildren {
  srcPoster: string;
  rating: number;
  nameFilm: string;
}
