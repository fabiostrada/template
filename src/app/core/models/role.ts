import { RoleType } from "src/app/core/configs/app-roles";
import { isNullOrEmpty } from "src/app/core/helpers/array.helper";
import { Base } from "./base";

export class Role extends Base {
    
    constructor(public override id: number,
                public name: string) {
        super(id);
    }

    static contains(roles: Array<Role>, role: RoleType): boolean {
        if (isNullOrEmpty(roles)) {
            return false;
        }
        let filteredRoles = roles.filter(item => item.name === role);
        return filteredRoles.length > 0;
    }

}