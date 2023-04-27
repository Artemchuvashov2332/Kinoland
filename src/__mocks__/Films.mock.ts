import { IFilmsEntity, IFilmsFilter, ITopFilmEntity } from 'domains/index';

export const GenresFilmMock: IFilmsFilter['category'] = [
  { id: 1, genre: 'Комедия' },
  { id: 2, genre: 'Ужасы' },
  { id: 3, genre: 'Мелодрамма' },
  { id: 4, genre: 'Детектив' },
  { id: 5, genre: 'Фантастика' },
];

export const CountriesFilmMock: IFilmsFilter['countries'] = [
  { id: 1, country: 'Россия' },
  { id: 2, country: 'Америка' },
  { id: 3, country: 'Казахстан' },
  { id: 4, country: 'Китай' },
  { id: 5, country: 'Дания' },
];

export const YearsFilmMock: IFilmsEntity['data']['year'][] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

export const FilmsMock: IFilmsEntity[] = [
  {
    category: ['Комедия'],
    data: {
      id: '1',
      name: 'Старикам тут не место',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Фильмы',
      rating: 7.4,
      year: 2022,
    },
  },
  {
    category: ['Комедия'],
    data: {
      id: '2',
      name: 'Голяк',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a2a3d9d6-7e5a-4e0c-8602-66e29811be23/600x900',
      type: 'Сериалы',
      rating: 7.4,
      year: 2020,
    },
  },
  {
    category: ['Мелодрамма'],
    data: {
      id: '3',
      name: 'Шрек Навсегда',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Мультфильмы',
      rating: 7.4,
      year: 2014,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '4',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '5',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '6',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '7',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '8',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '9',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '10',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
  {
    category: ['Детектив'],
    data: {
      id: '11',
      name: 'Наутро',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      type: 'Аниме',
      rating: 7.4,
      year: 2023,
    },
  },
];

export const TopFilmsMock: ITopFilmEntity[] = [
  {
    category: 'Детектив',
    data: {
      id: '1',
      name: 'Старикам тут не место',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/f9cf62b9-074d-4022-8e6b-8683c8f18318/300x450',
      rating: 7.4,
      year: 2022,
      description:
        'Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita, quaerat placeat nemo dolorem accusamus atque recusandae ipsam est vitae rerum obcaecati commodi nesciunt facere neque perspiciatis voluptates aut beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt quos dolorum fugiat distinctio, asperiores quas unde, dignissimos commodi quaerat odit. Veniam, eum recusandae odit pariatur inventore consequuntur unde cum.',
    },
  },
  {
    category: 'Фантастика',
    data: {
      id: '2',
      name: 'Голяк',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a2a3d9d6-7e5a-4e0c-8602-66e29811be23/600x900',
      rating: 7.4,
      year: 2020,
      description:
        'Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita, quaerat placeat nemo dolorem accusamus atque recusandae ipsam est vitae rerum obcaecati commodi nesciunt facere neque perspiciatis voluptates aut beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt quos dolorum fugiat distinctio, asperiores quas unde, dignissimos commodi quaerat odit. Veniam, eum recusandae odit pariatur inventore consequuntur unde cum.',
    },
  },
  {
    category: 'Фантастика',
    data: {
      id: '3',
      name: 'Голяк',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a2a3d9d6-7e5a-4e0c-8602-66e29811be23/600x900',
      rating: 7.4,
      year: 2020,
      description:
        'Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita, quaerat placeat nemo dolorem accusamus atque recusandae ipsam est vitae rerum obcaecati commodi nesciunt facere neque perspiciatis voluptates aut beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt quos dolorum fugiat distinctio, asperiores quas unde, dignissimos commodi quaerat odit. Veniam, eum recusandae odit pariatur inventore consequuntur unde cum.',
    },
  },
  {
    category: 'Фантастика',
    data: {
      id: '4',
      name: 'Голяк',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a2a3d9d6-7e5a-4e0c-8602-66e29811be23/600x900',
      rating: 7.4,
      year: 2020,
      description:
        'Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita, quaerat placeat nemo dolorem accusamus atque recusandae ipsam est vitae rerum obcaecati commodi nesciunt facere neque perspiciatis voluptates aut beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt quos dolorum fugiat distinctio, asperiores quas unde, dignissimos commodi quaerat odit. Veniam, eum recusandae odit pariatur inventore consequuntur unde cum.',
    },
  },
  {
    category: 'Фантастика',
    data: {
      id: '5',
      name: 'Голяк',
      posterUrl:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a2a3d9d6-7e5a-4e0c-8602-66e29811be23/600x900',
      rating: 7.4,
      year: 2020,
      description:
        'Lorem ipsum dolor sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, expedita, quaerat placeat nemo dolorem accusamus atque recusandae ipsam est vitae rerum obcaecati commodi nesciunt facere neque perspiciatis voluptates aut beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt quos dolorum fugiat distinctio, asperiores quas unde, dignissimos commodi quaerat odit. Veniam, eum recusandae odit pariatur inventore consequuntur unde cum.',
    },
  },
];
