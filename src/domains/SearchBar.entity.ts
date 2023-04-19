import { IFilmsType } from './Films.entity';

export interface ISearchParamsEntity {
  type: IFilmsType[keyof IFilmsType];
  genre: string;
  year: number;
}
