import { PropsWithChildren } from 'react';
import { ITopFilmEntity } from 'domains/index';

export interface IFilmsCardProps extends PropsWithChildren {
  srcPoster: string;
  rating: ITopFilmEntity['data']['rating'];
  nameFilm: ITopFilmEntity['data']['name'];
}
