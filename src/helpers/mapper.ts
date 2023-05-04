import { isGoodGenre } from './index';
import { SEARCH_FILTER } from 'constants/index';
import {
  IFilmsEntity,
  IFilmsFilter,
  ISearchParamsEntity,
  ITopFilmEntity,
  IFilmsDataEntity,
  ISingleFilmEntity,
} from 'domains/index';
import {
  GetFilmByFilterResponse,
  GetFilmDataByIdResponse,
  GetFilmsByFilterParams,
  GetFiltersResponse,
  GetTopFilmsResponse,
} from 'http/model';

export const mapToInternalTopFilms = (films: GetTopFilmsResponse): ITopFilmEntity[] => {
  const topFilmArr: ITopFilmEntity[] = [];

  const filmsData = films.films;

  filmsData.forEach((film) => {
    const filmGenres = film.genres?.reduce((acc, currGenre) => (acc += currGenre.genre + ' '), '');
    const filmCountries = film.countries?.reduce((acc, currCountry) => (acc += currCountry.country + ' '), '');

    if (film.filmId) {
      topFilmArr.push({
        category: filmGenres || 'Неизвестно',
        data: {
          id: film.filmId.toString(),
          name: film.nameRu ?? film.nameEn ?? 'Неизвестно',
          posterUrl: film.posterUrlPreview ?? film.posterUrl ?? '',
          rating: Number(film.rating) || 'Неизвестно',
          countries: filmCountries || 'Неизвестно',
          year: Number(film.year) || 'Неизвестно',
          description: 'Неизвестно',
        },
      });
    }
  });

  return topFilmArr;
};

export const mapToInternalFilters = (filters: GetFiltersResponse): IFilmsFilter => {
  const filmsFilterArr: IFilmsFilter = {
    category: [],
    countries: [],
  };

  filters.genres.forEach((genre) => {
    if (genre.id && genre.genre && isGoodGenre(genre.genre)) {
      filmsFilterArr.category.push({
        id: genre.id,
        genre: genre.genre,
      });
    }
  });

  filters.countries.forEach((country) => {
    if (country.id && country.country) {
      filmsFilterArr.countries.push({
        id: country.id,
        country: country.country,
      });
    }
  });

  return filmsFilterArr;
};

export const mapToExternalSearch = (searchParams: ISearchParamsEntity): GetFilmsByFilterParams => {
  const { type, categories, countries, year, keyword, page } = searchParams;

  let filmType: GetFilmsByFilterParams['type'];
  let filmOrderBy: GetFilmsByFilterParams['order'] = 'NUM_VOTE';

  if (type === SEARCH_FILTER.Films) filmType = 'FILM';
  if (type === SEARCH_FILTER.Series) filmType = 'TV_SERIES';
  if (type === SEARCH_FILTER.TV_Show) filmType = 'TV_SHOW';
  if (type === SEARCH_FILTER.Best) {
    filmType = 'ALL';
    filmOrderBy = 'RATING';
  }

  const params: GetFilmsByFilterParams = {
    countries: countries ? countries.id : undefined,
    genres: categories ? categories.id : undefined,
    yearFrom: year || undefined,
    yearTo: year || undefined,
    type: filmType || undefined,
    keyword: keyword || undefined,
    order: filmOrderBy,
    page,
  };

  return params;
};

export const mapToInternalFilms = (films: GetFilmByFilterResponse): IFilmsDataEntity[] => {
  const filmsArr: IFilmsDataEntity[] = [];

  films.items.forEach((film) => {
    if (film.genres?.some((genre) => !isGoodGenre(genre.genre))) return;

    if (film.kinopoiskId) {
      let filmType: IFilmsEntity['data']['type'] = 'Неизвестно';

      if (film.type === 'FILM') filmType = SEARCH_FILTER.Films;
      if (film.type === 'TV_SERIES') filmType = SEARCH_FILTER.Series;
      if (film.type === 'TV_SHOW') filmType = SEARCH_FILTER.TV_Show;

      filmsArr.push({
        id: film.kinopoiskId.toString(),
        name: film.nameRu ?? film.nameEn ?? film.nameOriginal ?? 'Неизвестно',
        posterUrl: film.posterUrl || film.posterUrlPreview || '',
        type: filmType,
        year: film.year || 'Неизвестно',
        rating: film.ratingKinopoisk ?? film.ratingImdb ?? 'Неизвестно',
      });
    }
  });

  return filmsArr;
};

export const mapToInternalFilm = (film: GetFilmDataByIdResponse): ISingleFilmEntity => {
  const filmCategories = film.genres.map((genre) => genre.genre).join(', ');
  const filmCountries = film.countries.map((country) => country.country).join(', ');
  let filmType: ISingleFilmEntity['data']['type'] = 'Неизвестно';

  if (film.type === 'FILM') filmType = 'Фильмы';
  if (film.type === 'TV_SERIES' || film.type === 'MINI_SERIES') filmType = 'Сериалы';
  if (film.type === 'TV_SHOW') filmType = 'ТВ-шоу';

  const filmData: ISingleFilmEntity = {
    category: filmCategories.length ? filmCategories : 'Неизвестно',
    data: {
      id: film.kinopoiskId.toString(),
      name: film.nameRu ?? film.nameEn ?? film.nameOriginal ?? 'Неизвестно',
      posterUrl: film.posterUrl,
      type: filmType,
      year: film.year ?? 'Неизвестно',
      countries: filmCountries || 'Неизвестно',
      rating: film.ratingKinopoisk ?? film.ratingImdb ?? 'Неизвестно',
      description: film.description ?? 'Неизвестно',
    },
  };

  return filmData;
};
