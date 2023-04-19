export const ROOT = '/';
export const SEARCH = 'search';
export const FILM = 'film';
export const FILM_ID = 'filmId';

export const PATH_LIST = {
  ROOT,
  SEARCH_ROUTE: `${ROOT}${SEARCH}`,
  FILM_ROUTE: `${ROOT}${FILM}/:${FILM_ID}`,
};
