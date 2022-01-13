import { AbstractControl, FormGroup } from "@angular/forms";
import { makeToken } from "../helpers/token.herlper";

export class UserDb {
    
    constructor(       
        public id: number | undefined,
        public name: string,
        public surname: string,
        public username: string,
        public token: string,
        public roles: Array<number>
    ) { }

    public static build(form: FormGroup): UserDb {
        let usernameControl: AbstractControl | null = form.get('username');        
        let nameControl: AbstractControl | null = form.get('name');
        let surnameControl: AbstractControl | null = form.get('surname');
        let rolesControl: AbstractControl | null = form.get('roleFormController');
        if (!usernameControl || !nameControl || !surnameControl || !rolesControl) {
          throw new Error("Build UserDb Failed!");
        }
        let roles: Array<number> = rolesControl.value;
        return new UserDb(undefined, 
                          nameControl.value,
                          surnameControl.value,
                          usernameControl.value,
                          makeToken(20),
                          roles);
      }
}