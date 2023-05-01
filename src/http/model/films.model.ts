import { paths } from './kinoland.swagger';

export type GetTopFilmsParams = paths['/api/v2.2/films/top']['get']['parameters']['query'];
export type GetTopFilmsResponse =
  paths['/api/v2.2/films/top']['get']['responses']['200']['content']['application/json'];

export type GetFilmDataByIdParams = paths['/api/v2.2/films/{id}']['get']['parameters']['path'];
export type GetFilmDataByIdResponse =
  paths['/api/v2.2/films/{id}']['get']['responses']['200']['content']['application/json'];

export type GetFiltersResponse =
  paths['/api/v2.2/films/filters']['get']['responses']['200']['content']['application/json'];

type FilmsFilterGenre = {
  genres: number | undefined;
  countries: number | undefined;
};
type FilterParams = paths['/api/v2.2/films']['get']['parameters']['query'];

export type GetFilmsByFilterParams = Omit<FilterParams, 'genres' | 'countries'> & FilmsFilterGenre;
export type GetFilmByFilterResponse =
  paths['/api/v2.2/films']['get']['responses']['200']['content']['application/json'];
