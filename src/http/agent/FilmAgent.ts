import { BasicAgent } from './BasicAgent';
import { GetTopFilmsParams, GetTopFilmsResponse } from 'http/model';

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
}

export const filmAgentInstance = new FilmAgent();
