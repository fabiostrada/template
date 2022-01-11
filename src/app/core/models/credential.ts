import { AbstractControl, FormGroup } from "@angular/forms";

export class Credential {

    constructor(public username: string,
                public password: string) {}

    static of(form: FormGroup): Credential {
        let usernameControl: AbstractControl | null = form.get('username');
        let passwordControl: AbstractControl | null = form.get('username');
        if (!usernameControl || !passwordControl) {
            throw new Error("Username or Password is undefined");
        }
        return new Credential(usernameControl.value, passwordControl.value);
    }

}