import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  saveToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadFromStorage(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }
}
