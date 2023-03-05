import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor() {}

  private _petsDb: Pet[] = [
    { _id: 'p123', name: 'Penrose', age: 14, type: 'dog', color: 'Black' },
    { _id: 'p124', name: 'Tami', age: 4, type: 'cat', color: 'white' },
    { _id: 'p125', name: 'Elmo', age: 7, type: 'cat', color: 'white' },
    { _id: 'p126', name: 'Klif', age: 2, type: 'horse', color: 'black' },
    { _id: 'p127', name: 'Dirden', age: 14, type: 'dog', color: 'Black' },
    // { _id: 'p128', name: 'Khalisee', age: 4, type: 'cat', color: 'white' },
    // { _id: 'p129', name: 'Ramif', age: 7, type: 'cat', color: 'white' },
    // { _id: 'p130', name: 'Perah', age: 2, type: 'cat', color: 'white' },
    // { _id: 'p131', name: 'Felix', age: 14, type: 'dog', color: 'Black' },
    // { _id: 'p132', name: 'Hu Hu', age: 4, type: 'cat', color: 'white' },
    // { _id: 'p133', name: 'Nazario jr.', age: 7, type: 'dog', color: 'white' },
    // { _id: 'p134', name: 'Claudiu', age: 2, type: 'horse', color: 'white' },
  ];

  private _pets$ = new BehaviorSubject<Pet[]>([]);
  public pets$ = this._pets$.asObservable();

  private _petFilter$ = new BehaviorSubject<string>('');
  public petFilter$ = this._petFilter$.asObservable();

  query() {
    const filterBy = this._petFilter$.value;
    const pets = this._petsDb.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.toLowerCase());
    });
    this._pets$.next(pets);
  }

  save(pet: Pet) {
    return pet._id ? this._edit(pet) : this._add(pet);
  }

  setPetFilter(petFilter: string) {
    this._petFilter$.next(petFilter);
    this.query();
    return of(petFilter);
  }

  delete(petId: string) {
    const pets = this._petsDb;
    const petIdx = pets.findIndex((p) => p._id === petId);
    if (petIdx === -1) throw new Error('could not delete pet');
    pets.splice(petIdx, 1);
    this._pets$.next(pets);
    return of({});
  }

  private _add(pet: Pet) {
    pet._id = this._makeId();
    this._petsDb.push(pet);
    this._pets$.next([...this._petsDb]);
    return of(pet);
  }

  private _edit(pet: Pet) {
    const pets = this._petsDb;
    const petIdx = pets.findIndex((_pet) => _pet._id === pet._id);
    pets.splice(petIdx, 1, pet);
    this._pets$.next([...pets]);
    return of(pet);
  }

  private _makeId(length = 5) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
