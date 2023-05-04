export interface IFilmsType {
  Films: 'Фильмы';
  Series: 'Сериалы';
  TV_Show: 'ТВ-шоу';
  Best: 'Лучшее';
}

export interface IFilmsFilter {
  category: {
    id: number;
    genre: string;
  }[];
  countries: {
    id: number;
    country: string;
  }[];
}

export interface IFilmsDataEntity {
  id: string;
  name: string;
  posterUrl: string;
  type: IFilmsType[keyof IFilmsType] | 'Неизвестно';
  year: number | 'Неизвестно';
  rating: number | 'Неизвестно';
  description?: string;
}
export interface IFilmsEntity {
  category: string[];
  data: IFilmsDataEntity;
}

export interface IFilmsByCategory {
  category: string;
  maxPage: number;
  items: IFilmsDataEntity[];
}

export interface ISearchFilms {
  maxPage: number;
  items: IFilmsDataEntity[];
}

type ITopFilmEntityData = Omit<IFilmsDataEntity, 'type'>;
export interface ITopFilmEntity {
  category: string;
  data: ITopFilmEntityData & {
    countries: string;
  };
}

export interface ISingleFilmEntity {
  category: string;
  data: IFilmsDataEntity & {
    countries: string;
  };
}
