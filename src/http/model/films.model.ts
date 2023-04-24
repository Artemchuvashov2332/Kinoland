import { paths } from './kinoland.swagger';

export type GetTopFilmsParams = paths['/api/v2.2/films/top']['get']['parameters']['query'];
export type GetTopFilmsResponse =
  paths['/api/v2.2/films/top']['get']['responses']['200']['content']['application/json'];

export type GetFilmDataByIdParams = paths['/api/v2.2/films/{id}']['get']['parameters']['path'];
export type GetFilmDataByIdResponse =
  paths['/api/v2.2/films/{id}']['get']['responses']['200']['content']['application/json'];

export type GetFiltersGenreResponse =
  paths['/api/v2.2/films/filters']['get']['responses']['200']['content']['application/json']['genres'];
export type GetFiltersCountryResponse =
  paths['/api/v2.2/films/filters']['get']['responses']['200']['content']['application/json']['countries'];
