import { makeObservable, observable, computed, action } from 'mobx';
import { IFilmsEntity, ITopFilmEntity } from 'domains/index';
import { FilmsMock, GenresFilmMock, YearsFilmMock } from '__mocks__/Films.mock';
import { delay } from 'helpers/index';
import { filmAgentInstance } from 'http/agent';
import { mapToInternalTopFilms } from 'helpers/mapper';

type PrivateField = '_years' | '_genres' | '_films' | '_topFilms' | '_isError' | '_isLoader';

class FilmStore {
  constructor() {
    makeObservable<this, PrivateField>(this, {
      _years: observable,
      _genres: observable,
      _films: observable,
      _topFilms: observable,
      _isError: observable,
      _isLoader: observable,

      years: computed,
      genres: computed,
      films: computed,
      topFilms: computed,
      isError: computed,
      isLoader: computed,

      loadTopFilms: action,
    });
  }

  private _years: IFilmsEntity['data']['year'][] = [];
  private _genres: IFilmsEntity['category'][] = [];
  private _films: IFilmsEntity[] = [];
  private _topFilms: ITopFilmEntity[] = [];
  private _isError = false;
  private _isLoader = true;

  get years() {
    return this._years;
  }

  get genres() {
    return this._genres;
  }

  get films() {
    return this._films;
  }

  get topFilms() {
    return this._topFilms;
  }

  get isError() {
    return this._isError;
  }

  get isLoader() {
    return this._isLoader;
  }

  async loadFilms() {
    try {
      this._isLoader = true;

      await delay(2500);

      this._films = FilmsMock;
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }

  async loadTopFilms() {
    try {
      this._isLoader = true;

      const res = await filmAgentInstance.getTopFilms({ type: 'TOP_100_POPULAR_FILMS', page: 1 });
      const topFilms = mapToInternalTopFilms(res);

      this._topFilms = topFilms;
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }

  async loadGenresYears() {
    try {
      this._isLoader = true;

      await delay(2500);

      this._genres = GenresFilmMock;
      this._years = YearsFilmMock;
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }
}

export const filmStoreInstance = new FilmStore();
