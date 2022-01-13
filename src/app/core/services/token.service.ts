import { Injectable } from '@angular/core';
import { LocalStorageItem } from '../configs/local-storage-item';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private localStorageService: LocalStorageService) { }

  public token(): string | undefined {
      return this.localStorageService.getItem<string>(LocalStorageItem.TOKEN);
  }

  public setToken(token: string): void {
      this.localStorageService.setItem<string>(token, LocalStorageItem.TOKEN);
  }

}
