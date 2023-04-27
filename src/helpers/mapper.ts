import { isGoodGenre } from './index';
import { SEARCH_FILTER } from 'constants/index';
import { IFilmsEntity, IFilmsFilter, ISearchParamsEntity, ITopFilmEntity } from 'domains/index';
import { GetFilmByFilterResponse, GetFilmsByFilterParams, GetFiltersResponse, GetTopFilmsResponse } from 'http/model';

export const mapToInternalTopFilms = (films: GetTopFilmsResponse): ITopFilmEntity[] => {
  const topFilmArr: ITopFilmEntity[] = [];

  const filmsData = films.films;

  filmsData.forEach((film) => {
    const filmGenres = film.genres?.reduce((acc, currGenre) => (acc += currGenre.genre), '');

    if (film.filmId) {
      topFilmArr.push({
        category: filmGenres ?? 'Неизвестно',
        data: {
          id: film.filmId.toString(),
          name: film.nameRu ?? film.nameEn ?? 'Неизвестно',
          posterUrl: film.posterUrlPreview ?? film.posterUrl ?? '',
          year: Number(film.year) || 'Неизвестно',
          rating: Number(film.rating) || 'Неизвестно',
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
  const { type, categories, countries, year, keyword } = searchParams;

  let filmType: GetFilmsByFilterParams['type'];

  if (type === 'Фильмы') filmType = 'FILM';
  if (type === 'Сериалы') filmType = 'TV_SERIES';
  if (type === 'Мультфильмы') categories ? (categories.id = 15) : undefined; //чето придумать
  if (type === 'Аниме') categories ? (categories.id = 25) : undefined; //чето придумать

  const params: GetFilmsByFilterParams = {
    countries: countries ? [countries.id] : undefined,
    genres: categories ? categories.id : undefined,
    yearFrom: year || undefined,
    yearTo: year || undefined,
    type: filmType || undefined,
    keyword: keyword || undefined,
  };

  return params;
};

export const mapToInternalFilms = (films: GetFilmByFilterResponse): IFilmsEntity[] => {
  const filmsArr: IFilmsEntity[] = [];

  films.items.forEach((film) => {
    if (film.kinopoiskId) {
      let category: IFilmsEntity['category'] = film.genres?.map((genre) => genre.genre) || ['Неизвестно'];
      let filmType: IFilmsEntity['data']['type'] = SEARCH_FILTER.Films;

      if (film.type === 'TV_SERIES') filmType = SEARCH_FILTER.Series;
      if (category.includes(SEARCH_FILTER.Cartoon)) {
        filmType = SEARCH_FILTER.Cartoon;
        category = [SEARCH_FILTER.Cartoon];
      }

      if (category.includes(SEARCH_FILTER.Anime)) {
        filmType = SEARCH_FILTER.Anime;
        category = [SEARCH_FILTER.Anime];
      }

      filmsArr.push({
        category: category,
        data: {
          id: film.kinopoiskId.toString(),
          name: film.nameRu ?? film.nameEn ?? film.nameOriginal ?? 'Неизвестно',
          posterUrl: film.posterUrl || film.posterUrlPreview || '',
          type: filmType,
          year: film.year || 'Неизвестно',
          rating: film.ratingKinopoisk ?? film.ratingImdb ?? 'Неизвестно',
        },
      });
    }
  });

  return filmsArr;
};
