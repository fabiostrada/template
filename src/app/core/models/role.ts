import { RoleType } from "src/app/config/app-roles";
import { isNullOrEmpty } from "src/app/shared/helpers/array.helper";

export class Role {
    
    constructor(public id: number,
                public name: string) {}

    static contains(roles: Array<Role>, role: RoleType): boolean {
        if (isNullOrEmpty(roles)) {
            return false;
        }
        let filteredRoles = roles.filter(item => item.name === role);
        return filteredRoles.length > 0;
    }

}