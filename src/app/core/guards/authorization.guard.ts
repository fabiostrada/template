import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { rolesTypesFrom, RoleType } from 'src/app/core/configs/app-roles';
import { AppRoutings } from 'src/app/core/configs/app-routing';
import { CommonPageRouting } from 'src/app/features/common-page/configs/common-page.routing';
import { Role } from '../models/role';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanLoad {

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRoles(rolesTypesFrom(route));
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkRoles(rolesTypesFrom(route));
  }

  private checkRoles(rolesTypes: Array<RoleType>): Observable<boolean | UrlTree> | boolean {
      if (rolesTypes.length == 0) {
          return true;
      }
      return this.userService.currentUser()
                 .pipe(switchMap((user: User | undefined) => {
                   if (!user || !user?.roles || user?.roles.length == 0) {
                      return of(false);
                   } else {
                      let result: boolean = this.allRoleTypesAreContainedIntoUserRole(rolesTypes, user.roles);
                      return result ? 
                        of(true) :
                        of(this.router.navigate([AppRoutings.commonpage, CommonPageRouting.page401]));
                   }
                 })) as Observable<boolean | UrlTree>;
  }
  
  private allRoleTypesAreContainedIntoUserRole(rolesTypes: Array<RoleType>, rolesOfUser: Array<Role>): boolean {
    return rolesTypes.map(roleType => Role.contains(rolesOfUser, roleType)).reduce((a, b) => a && b, true);
  }
}
