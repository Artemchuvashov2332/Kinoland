export interface IFilmsType {
  Films: 'Фильмы';
  Series: 'Сериалы';
  Cartoon: 'Мультфильмы';
  Anime: 'Аниме';
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
  type: IFilmsType[keyof IFilmsType];
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
