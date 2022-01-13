import { RoleType } from "src/app/core/configs/app-roles";
import { isNotEmpty } from "src/app/core/helpers/array.helper";
import { Role } from "./role";
import { UserApi } from "./api/user.api";
import { Base } from "./base";

export class User extends Base {

    public fullname: string;

    constructor(
        public override id: number | undefined,
        public name: string,
        public surname: string,
        public username: string,
        public roles: Array<Role>
    ) { 
        super(id);
        this.fullname = this.surname + ' ' + this.name;
    }

    public static build(userDb: UserApi, roles: Array<Role>): User {
        let roleOfUser: Array<Role> = isNotEmpty(userDb.roles) ? roles.filter(role => userDb.roles.includes(role.id)):[];
        return new User(
            userDb.id, userDb.name, userDb.surname, userDb.username, roleOfUser
        );
    }

    public static isAdmin(user: User): boolean {
        return Role.contains(user.roles, RoleType.ADMIN);             
    }

    public static isSeller(user: User): boolean {
        return Role.contains(user.roles, RoleType.SELLER); 
    }

    public static isBuyer(user: User): boolean {
        return Role.contains(user.roles, RoleType.BUYER); 
    }
    
}