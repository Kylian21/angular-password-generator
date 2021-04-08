import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storageKey: string = 'password';

  constructor() {
    localStorage.setItem(this.storageKey, JSON.stringify([]));
  }

  savePassword(password: string) {
    if (password) {
      let oldList: string[] = this.getPasswords();
      oldList.push(password);
      localStorage.setItem(this.storageKey, JSON.stringify(oldList));
    }
  }

  getPasswords(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
  }
}
