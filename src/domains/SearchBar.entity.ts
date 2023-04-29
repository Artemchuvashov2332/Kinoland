import { IFilmsType } from './Films.entity';

export type SearchFilmTypes = IFilmsType[keyof IFilmsType];
export interface ISearchParamsEntity {
  type?: IFilmsType[keyof IFilmsType];
  categories?: {
    id: number;
    genre?: string;
  };
  countries?: {
    id: number;
    country: string;
  };
  year?: number;
  keyword?: string;
}
