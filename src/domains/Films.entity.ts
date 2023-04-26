export interface IFilmsType {
  Films: 'Фильмы';
  Series: 'Сериалы';
  Cartoon: 'Мультфильмы';
  Anime: 'Аниме';
}

export interface IFilmsEntity {
  category: string;
  data: {
    id: string;
    name: string;
    posterUrl: string;
    type: IFilmsType[keyof IFilmsType];
    year: number | 'Неизвестно';
    rating: number | 'Неизвестно';
    description?: string;
  };
}

type ITopFilmEntityData = Omit<IFilmsEntity['data'], 'type'>;
export interface ITopFilmEntity {
  category: string;
  data: ITopFilmEntityData;
}
