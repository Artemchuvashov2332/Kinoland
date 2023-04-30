import { IFilmsDataEntity } from 'domains/index';

const filmIdlist: string[] = [];

const filterFilm = (film: IFilmsDataEntity): boolean => {
  if (filmIdlist.includes(film.id)) {
    return false;
  } else {
    filmIdlist.push(film.id);
    return true;
  }
};

export const deleteDuplicateFilms = (films: IFilmsDataEntity[]): IFilmsDataEntity[] => {
  const noDuplicateFilms: IFilmsDataEntity[] = films.filter(filterFilm);

  filmIdlist.length = 0;

  return noDuplicateFilms;
};
