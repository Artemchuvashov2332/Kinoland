import { IFilmsFilter } from 'domains/index';

export const isGoodGenre = (genre: IFilmsFilter['category'][0]['genre']): boolean => {
  const BadGenreList = [
    'история',
    'музыка',
    'мюзикл',
    'спорт',
    '',
    'новости',
    'концерт',
    'для взрослых',
    'церемония',
    'реальное ТВ',
  ];

  return !BadGenreList.includes(genre);
};
