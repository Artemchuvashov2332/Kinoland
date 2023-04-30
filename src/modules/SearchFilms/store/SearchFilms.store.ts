import { action, computed, makeObservable, observable } from 'mobx';
import { IFilmsFilter, ISearchFilms, ISearchParamsEntity } from 'domains/index';
import { mapToExternalSearch, deleteDuplicateFilms, mapToInternalSearch, mapToInternalFilters } from 'helpers/index';
import { filmAgentInstance } from 'http/index';

type PrivateFields = '_countries' | '_genres' | '_searchFilms' | '_isError' | '_isLoader';

class SearchFilmsStore {
  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _countries: observable,
      _genres: observable,
      _searchFilms: observable,
      _isError: observable,
      _isLoader: observable,

      countries: computed,
      genres: computed,
      searchFilms: computed,
      isError: computed,
      isLoader: computed,

      clearSearchFilms: action,
      loadFilmsByParams: action,
      loadGenresCountries: action,
    });
  }

  private _countries: IFilmsFilter['countries'] = [];
  private _genres: IFilmsFilter['category'] = [];
  private _searchFilms: ISearchFilms = {
    maxPage: 0,
    items: [],
  };
  private _isError = false;
  private _isLoader = true;

  get countries() {
    return this._countries;
  }

  get genres() {
    return this._genres;
  }

  get searchFilms() {
    return this._searchFilms;
  }

  get isError() {
    return this._isError;
  }

  get isLoader() {
    return this._isLoader;
  }

  clearSearchFilms() {
    this._searchFilms = {
      maxPage: 0,
      items: [],
    };
  }

  async loadFilmsByParams(params: ISearchParamsEntity) {
    try {
      this._isLoader = true;
      if (!this._genres.length || !this._countries.length) {
        await this.loadGenresCountries();
      }

      const externalParams = mapToExternalSearch(params);
      const res = await filmAgentInstance.getFilmsByFilter(externalParams);
      this._searchFilms = {
        maxPage: res.totalPages,
        items: [...this._searchFilms.items, ...mapToInternalSearch(res)],
      };
      this._searchFilms.items = deleteDuplicateFilms(this._searchFilms.items);
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

export const searchFilmsStoreInstance = new SearchFilmsStore();
