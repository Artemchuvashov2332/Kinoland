import { ITopFilmEntity } from 'domains/index';
import { GetTopFilmsResponse } from 'http/model';

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
