import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ExistUser implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfExistUser();
  }

  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfExistUser();
  }

  private checkIfExistUser(): Observable<boolean | UrlTree> {
      return this.userService.currentUser()
                 .pipe(switchMap((user: User | undefined) => {
                    if (!!user) {
                      let urlTreeHome: UrlTree = this.router.createUrlTree(['/']);
                      return of(urlTreeHome);
                    } else {
                      return of(true);
                    }
                 })) as Observable<boolean | UrlTree>;
  }
  
}
