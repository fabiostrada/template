import { ActivatedRouteSnapshot, Route } from "@angular/router";

export enum RoleType {
    ADMIN = 'admin',
    SELLER = 'seller',
    BUYER = 'buyer'
}

export const rolesTypesFrom = (route: ActivatedRouteSnapshot | Route): Array<RoleType> => {
    if (!route || !route.data || !route.data['roles']) {
        return [];
    }
    return route.data['roles'];
}