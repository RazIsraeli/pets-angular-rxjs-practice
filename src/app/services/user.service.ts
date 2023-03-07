import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USER_STORAGE_KEY: string = 'user';

  private _loggedInUser$ = new BehaviorSubject<User | undefined>(undefined);
  public loggedInUser$ = this._loggedInUser$.asObservable();

  constructor(private storageService: StorageService) {}

  getLoggedInUser(): void {
    const user = this.storageService.loadFromStorage('user');
    if (user) this._loggedInUser$.next(user);
    this._loggedInUser$.next(undefined);
  }

  signup(user: User) {
    user._id = this._makeId();
    delete user.password;
    delete user._id;
    this.storageService.saveToStorage(this.USER_STORAGE_KEY, user);
    this._loggedInUser$.next(user);
    return of(user);
  }

  logOut() {
    this.storageService.saveToStorage(this.USER_STORAGE_KEY, null);
    this._loggedInUser$.next(undefined);
  }

  setLoggedInUser(user: User) {
    this._loggedInUser$.next(user);
  }

  getEmptyUser() {
    return {
      name: '',
      username: '',
      password: '',
    };
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
