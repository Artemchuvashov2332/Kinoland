import { makeObservable, observable, computed, action } from 'mobx';
import { ISingleFilmEntity } from 'domains/index';
import { mapToInternalFilm } from 'helpers/index';
import { filmAgentInstance } from 'http/agent';

type PrivateField = '_filmData' | '_isError' | '_isLoader';

class SingleFilmStore {
  constructor() {
    makeObservable<this, PrivateField>(this, {
      _filmData: observable,
      _isError: observable,
      _isLoader: observable,

      filmData: computed,
      isError: computed,
      isLoader: computed,

      loadFilmDataById: action,
    });
  }

  private _filmData: ISingleFilmEntity = {
    category: 'Неизвестно',
    data: {
      id: '',
      name: 'Неизвестно',
      posterUrl: '',
      type: 'Неизвестно',
      countries: 'Неизвестно',
      year: 'Неизвестно',
      rating: 'Неизвестно',
      description: '',
    },
  };
  private _isError = false;
  private _isLoader = true;

  get filmData() {
    return this._filmData;
  }

  get isError() {
    return this._isError;
  }

  get isLoader() {
    return this._isLoader;
  }

  async loadFilmDataById(filmId: string) {
    try {
      this._isLoader = true;
      const res = await filmAgentInstance.getFilmById({ id: Number(filmId) });
      this._filmData = mapToInternalFilm(res);
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }
}

export const singleFilmStoreInstance = new SingleFilmStore();
