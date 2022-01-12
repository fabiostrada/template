import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { AppConfig } from '../configs/app-config';
import { LocalStorageItem } from '../configs/local-storage-item';
import { Credential } from '../models/credential';
import { Role } from '../models/role';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
  deps: [RoleService]
})
export class UserService extends HttpService {

  constructor(private localStorageService: LocalStorageService,
              protected override appConfig: AppConfig,
              protected override httpClient: HttpClient,
              private roleService: RoleService) { 
    super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
    return this.appConfig.endpoints.users.baseUrl;
  }

  public currentUser(): Observable<User | undefined> {
    let currentUser: User = this.localStorageService.getItem<User>(LocalStorageItem.USER);    
    return new Observable(observer => observer.next(!!currentUser ? currentUser : undefined));
  }

  public isAdmin(): Observable<boolean> {
    return this.currentUser()
      .pipe(switchMap((user: User | undefined) => {
          let isAdmin: boolean = !!user && User.isAdmin(user);
          return of(isAdmin);
      })) as Observable<boolean>;
  }

  public isSeller(): Observable<boolean> {
    return this.currentUser()
    .pipe(switchMap((user: User | undefined) => {
        let isAdmin: boolean = !!user && User.isSeller(user);
        return of(isAdmin);
    })) as Observable<boolean>;
  }

  public isBuyer(): Observable<boolean> {
    return this.currentUser()
    .pipe(switchMap((user: User | undefined) => {
        let isAdmin: boolean = !!user && User.isBuyer(user);
        return of(isAdmin);
    })) as Observable<boolean>;
  }

  public login(credential: Credential): Observable<User> {
    return this.httpClient
        .get<Array<User>>(`${this.baseUrl}${this.serviceUrl()}?username=${credential.username}`)
        .pipe(
          switchMap((users: Array<any>) => {
            if (!!users && users.length == 1) {
              let roles: Array<Role> = this.roleService.getAllRoles();
              let currentUser: User = User.build(users[0], roles);
              this.localStorageService.setItem<User>(currentUser, LocalStorageItem.USER);
              return new Observable(oberver => oberver.next(currentUser));
            } else {
              throw new Error('Incorrect Credentials');
            }
          })) as Observable<User>;   
  }

  public logout(): void {
    this.localStorageService.removeItem(LocalStorageItem.USER);
  }

}
