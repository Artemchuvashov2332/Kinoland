import { makeObservable, observable, computed, action } from 'mobx';
import { IFilmsEntity, IFilmsFilter, ISearchParamsEntity, ITopFilmEntity } from 'domains/index';
import {
  fiveRandonGenre,
  mapToExternalSearch,
  mapToInternalFilms,
  mapToInternalFilters,
  mapToInternalTopFilms,
  deleteDuplicateFilms,
} from 'helpers/index';
import { filmAgentInstance } from 'http/agent';

type PrivateField = '_countries' | '_genres' | '_films' | '_topFilms' | '_listCategory' | '_isError' | '_isLoader';

class FilmStore {
  constructor() {
    makeObservable<this, PrivateField>(this, {
      _countries: observable,
      _genres: observable,
      _listCategory: observable,
      _films: observable,
      _topFilms: observable,
      _isError: observable,
      _isLoader: observable,

      countries: computed,
      genres: computed,
      films: computed,
      topFilms: computed,
      listCategory: computed,
      isError: computed,
      isLoader: computed,

      loarRandomFilm: action,
      loadTopFilms: action,
      loadFilmsByParams: action,
      loadGenresCountries: action,
    });
  }

  private _countries: IFilmsFilter['countries'] = [];
  private _genres: IFilmsFilter['category'] = [];
  private _films: IFilmsEntity[] = [];
  private _topFilms: ITopFilmEntity[] = [];
  private _listCategory: IFilmsFilter['category'] = [];
  private _isError = false;
  private _isLoader = true;

  get countries() {
    return this._countries;
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

  get listCategory() {
    return this._listCategory;
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

      const randonGenres = fiveRandonGenre(this._genres);

      randonGenres.forEach(async (randonGenre) => {
        await this.loadFilmsByParams({ categories: { id: randonGenre.id } });
        this._listCategory.push(randonGenre);
      });
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  }

  async loadFilmsByParams(params: ISearchParamsEntity) {
    try {
      this._isLoader = true;
      if (!this._genres.length || !this._countries.length) {
        await this.loadGenresCountries();
      }

      const externalParams = mapToExternalSearch(params);
      const res = await filmAgentInstance.getFilmsByFilter(externalParams);
      this._films.push(...mapToInternalFilms(res));
      this._films = deleteDuplicateFilms(this._films);
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

  async loadGenresCountries() {
    try {
      this._isLoader = true;

      const res = await filmAgentInstance.getFilters();
      const filters = mapToInternalFilters(res);

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
