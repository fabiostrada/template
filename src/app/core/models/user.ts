import { Role } from "./role";

export class User {

    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public username: string,
        public roles: Array<Role>
    ) { }

}