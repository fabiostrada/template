import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { AppConfig } from '../configs/app-config';
import { LocalStorageItem } from '../configs/local-storage-item';
import { Credential } from '../models/credential';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  constructor(private localStorageService: LocalStorageService,
              protected override appConfig: AppConfig,
              protected override httpClient: HttpClient) { 
    super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
    return this.appConfig.endpoints.users.baseUrl;
  }

  public currentUser(): Observable<User | undefined> {
    let currentUser: User = this.localStorageService.getItem<User>(LocalStorageItem.USER);
    return new Observable(observer => observer.next(!!currentUser ? currentUser : undefined));
  }

  public login(credential: Credential): Observable<User> {
    debugger;
    return this.httpClient.get<Array<User>>(`${this.baseUrl}${this.serviceUrl()}?username=${credential.username}`)
        .pipe(
          switchMap((users: Array<User>) => {
            if (!!users && users.length == 1) {
              this.localStorageService.setItem<User>(users[0], LocalStorageItem.USER);
              return new Observable(oberver => oberver.next(users[0]));
            } else {
              throw new Error('Incorrect Credentials');
            }
          })) as Observable<User>;   
  }

}
