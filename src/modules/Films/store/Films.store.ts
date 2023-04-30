import { makeObservable, observable, computed, action } from 'mobx';
import { IFilmsByCategory, IFilmsFilter, ITopFilmEntity } from 'domains/index';
import {
  fiveRandonGenre,
  mapToExternalSearch,
  mapToInternalFilms,
  mapToInternalFilters,
  mapToInternalTopFilms,
  delay,
} from 'helpers/index';
import { filmAgentInstance } from 'http/agent';

type PrivateField = '_countries' | '_genres' | '_topFilms' | '_filmsByCategory' | '_isError' | '_isLoader';

class FilmStore {
  constructor() {
    makeObservable<this, PrivateField>(this, {
      _countries: observable,
      _genres: observable,
      _filmsByCategory: observable,
      _topFilms: observable,
      _isError: observable,
      _isLoader: observable,

      countries: computed,
      genres: computed,
      topFilms: computed,
      filmsByCategory: computed,
      isError: computed,
      isLoader: computed,

      loarRandomFilm: action,
      loadTopFilms: action,
      loadGenresCountries: action,
    });
  }

  private _countries: IFilmsFilter['countries'] = [];
  private _genres: IFilmsFilter['category'] = [];
  private _topFilms: ITopFilmEntity[] = [];
  private _filmsByCategory: IFilmsByCategory[] = [];
  private _isError = false;
  private _isLoader = true;

  get countries() {
    return this._countries;
  }

  get genres() {
    return this._genres;
  }

  get topFilms() {
    return this._topFilms;
  }

  get filmsByCategory() {
    return this._filmsByCategory;
  }

  get isError() {
    return this._isError;
  }

  get isLoader() {
    return this._isLoader;
  }

  async loarRandomFilm() {
    try {
      this._isLoader = true;

      if (!this._genres.length || !this._countries.length) {
        await this.loadGenresCountries();
      }

      await delay(1000);
      const randonGenres = fiveRandonGenre(this._genres);

      for (const randonGenre of randonGenres) {
        const externalParams = mapToExternalSearch({ categories: { id: randonGenre.id } });
        const res = await filmAgentInstance.getFilmsByFilter(externalParams);
        const internalParams = mapToInternalFilms(res);
        this._filmsByCategory.push({
          category: randonGenre.genre,
          items: internalParams,
          maxPage: res.totalPages,
        });
      }
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

      await delay(1000);

      this._topFilms = topFilms;
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }

  async loadGenresCountries() {
    try {
      this._isLoader = true;

      const res = await filmAgentInstance.getFilters();
      const filters = mapToInternalFilters(res);

      await delay(1000);

      this._genres = filters.category;
      this._countries = filters.countries;
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }
}

export const filmStoreInstance = new FilmStore();
