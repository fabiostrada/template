import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem<T>(value: T, type: string): void {
    localStorage.setItem(type, JSON.stringify(value));
  }

  public getItem<T>(type: string): T {
    const item: any = localStorage.getItem(type);
    return !!item ? JSON.parse(item) : null;
  }

  public removeItem(type: string): void {
    localStorage.removeItem(type);
  }

}
