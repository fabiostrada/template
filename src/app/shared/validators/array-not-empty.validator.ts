import { AbstractControl, ValidatorFn } from "@angular/forms";

export function arrayNotEmptyValidator(): ValidatorFn {
    return (control: AbstractControl):{ [key:string]:any} | null => {
        let array: Array<any> = control.value as Array<any>;
        const isEmptyOrNull: boolean = !array || array.length == 0;
        return isEmptyOrNull ?
            { arrayNotEmpty: { value: control.value}} : null;
    }
}