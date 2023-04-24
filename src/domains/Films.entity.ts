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
    year: number;
    rating: number;
    description?: string;
  };
}
