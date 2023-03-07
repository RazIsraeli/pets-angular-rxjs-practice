import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  checkLoggedIn() {
    const user = this.storageService.loadFromStorage('user');
    if (user) return of(true);
    else return of(false);
  }
}
