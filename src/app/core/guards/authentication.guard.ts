import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AppRoutings } from 'src/app/config/app-routing';
import { LoginRouting } from 'src/app/features/login/configs/login.routing';
import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthorization();
  }

  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkAuthorization();
  }

  private checkAuthorization(): Observable<boolean | UrlTree> {
      return this.userService.currentUser()
                 .pipe(switchMap((user: User | undefined) => {
                    if (!!user) {
                        return of(true)
                    } else {
                        let urlTreeLogin: UrlTree = this.router.createUrlTree([AppRoutings.login, LoginRouting.login]);
                        return of(urlTreeLogin);
                    }
                 })) as Observable<boolean | UrlTree>;
  }
}
