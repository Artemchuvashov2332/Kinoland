import { PropsWithChildren } from 'react';
import { IFilmsEntity } from 'domains/Films.entity';

export interface IFilmsRowProps extends PropsWithChildren {
  filmsList: IFilmsEntity[];
}
