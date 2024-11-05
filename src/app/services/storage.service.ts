import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setItem(key: string, value: string): void {
    if (this.document.defaultView && this.document.defaultView.localStorage) {
      this.document.defaultView.localStorage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    if (this.document.defaultView && this.document.defaultView.localStorage) {
      return this.document.defaultView.localStorage.getItem(key);
    }
    return null; // Or return a default value
  }

  removeItem(key: string): void {
    if (this.document.defaultView && this.document.defaultView.localStorage) {
      this.document.defaultView.localStorage.removeItem(key);
    }
  }
}
