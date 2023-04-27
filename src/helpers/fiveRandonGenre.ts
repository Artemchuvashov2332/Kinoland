import { IFilmsFilter } from 'domains/index';

const copyGenreList: IFilmsFilter['category'] = [];
const firstCall = true;

export const fiveRandonGenre = (genreList: IFilmsFilter['category']): IFilmsFilter['category'] => {
  const randomGenreId: IFilmsFilter['category'] = [];

  if (firstCall) {
    copyGenreList.push(...genreList);
    !firstCall;
  }

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * copyGenreList.length);
    if (!copyGenreList.length) break;

    randomGenreId.push({
      id: copyGenreList[random].id,
      genre: copyGenreList[random].genre,
    });
    copyGenreList.splice(random, 1);
  }

  return randomGenreId;
};
