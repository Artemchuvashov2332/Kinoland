import { BasicAgent } from './BasicAgent';
import {
  GetFilmByFilterResponse,
  GetFilmDataByIdParams,
  GetFilmDataByIdResponse,
  GetFilmsByFilterParams,
  GetFiltersResponse,
  GetTopFilmsParams,
  GetTopFilmsResponse,
} from 'http/model';

class FilmAgent extends BasicAgent {
  constructor() {
    super(process.env.APP_API_URL as string, {
      headers: {
        'X-API-KEY': process.env.APP_API_TOKEN,
        'Content-Type': 'application/json',
      },
    });
  }

  async getTopFilms({ type, page }: GetTopFilmsParams): Promise<GetTopFilmsResponse> {
    const res = await this.$http.get('/api/v2.2/films/top', {
      params: {
        type,
        page,
      },
    });

    return res.data;
  }

  async getFilters(): Promise<GetFiltersResponse> {
    const res = await this.$http.get('/api/v2.2/films/filters');

    return res.data;
  }

  async getFilmsByFilter(searchParams: GetFilmsByFilterParams): Promise<GetFilmByFilterResponse> {
    const res = await this.$http('/api/v2.2/films', {
      params: {
        ...searchParams,
      },
    });

    return res.data;
  }

  async getFilmById({ id }: GetFilmDataByIdParams): Promise<GetFilmDataByIdResponse> {
    const res = await this.$http(`/api/v2.2/films/${id}`);

    return res.data;
  }
}

export const filmAgentInstance = new FilmAgent();
