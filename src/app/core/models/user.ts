import { RoleType } from "src/app/config/app-roles";
import { isNotEmpty } from "src/app/shared/helpers/array.helper";
import { Role } from "./role";

export class User {

    public fullname: string;

    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public username: string,
        public roles: Array<Role>
    ) { 
        this.fullname = this.surname + ' ' + this.name;
    }

    public static build(userDb: any, roles: Array<Role>): User {
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