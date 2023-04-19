export interface IFilmsType {
  Films: 'Фильмы';
  Series: 'Сериалы';
  Cartoon: 'Мультфильмы';
  Anime: 'Аниме';
}

export interface IFilmsEntity {
  id: string;
  name: string;
  posterUrl: string;
  type: IFilmsType[keyof IFilmsType];
  genre: string;
  year: number;
  description?: string;
}
