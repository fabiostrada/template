import { RoleType } from "src/app/core/configs/app-roles";
import { isNotEmpty } from "src/app/core/helpers/array.helper";
import { Role } from "./role";
import { UserDb } from "./user.db";

export class User {

    public fullname: string;

    constructor(
        public id: number | undefined,
        public name: string,
        public surname: string,
        public username: string,
        public roles: Array<Role>
    ) { 
        this.fullname = this.surname + ' ' + this.name;
    }

    public static build(userDb: UserDb, roles: Array<Role>): User {
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