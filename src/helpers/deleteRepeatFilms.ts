import { IFilmsEntity } from 'domains/index';

const filmIdlist: string[] = [];

const filterFilm = (film: IFilmsEntity): boolean => {
  if (filmIdlist.includes(film.data.id)) {
    return false;
  } else {
    filmIdlist.push(film.data.id);
    return true;
  }
};

export const deleteDuplicateFilms = (films: IFilmsEntity[]): IFilmsEntity[] => {
  const noDuplicateFilms: IFilmsEntity[] = films.filter(filterFilm);

  filmIdlist.length = 0;

  return noDuplicateFilms;
};
