import { PropsWithChildren } from 'react';
import { IFilmsDataEntity } from 'domains/index';

export interface IFilmsRowProps extends PropsWithChildren {
  filmsList: IFilmsDataEntity[];
  nameCategory: string;
}
