import { makeObservable } from 'mobx';

type PrivateField = '';

class FilmStore {
  constructor() {
    makeObservable(this);
  }
}
