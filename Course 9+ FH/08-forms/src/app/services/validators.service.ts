import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

interface FormErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: "root"
})
export class ValidatorsService {
  constructor() {}

  eightCharacters = (control: FormControl): FormErrorValidate => {
    if (control.value && /(.{8,})/.test(control.value)) return null;
    return { noEightCharacters: true };
  };

  lowercase = (control: FormControl): FormErrorValidate => {
    if (control.value && /(?=.*[a-z])/.test(control.value)) return null;
    return { noLowercase: true };
  };

  uppercase = (control: FormControl): FormErrorValidate => {
    if (control.value && /(?=.*[A-Z])/.test(control.value)) return null;
    return { noUppercase: true };
  };

  number = (control: FormControl): FormErrorValidate => {
    if (control.value && /(?=.*[0-9])/.test(control.value)) return null;
    return { noNumber: true };
  };

  specialCharacter = (control: FormControl): FormErrorValidate => {
    if (control.value && /(?=.*[$@$!%*?&])/.test(control.value)) return null;
    return { noSpecialCharacter: true };
  };

  userExist = (control: FormControl): Promise<FormErrorValidate> => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value.toLowerCase() === "luismz16")
          resolve({ userExist: true });
        else resolve(null);
      }, 3500);
    });
  };

  password = (control: FormControl): FormErrorValidate => {
    if (
      control.value &&
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(.{8,})/.test(
        control.value
      )
    )
      return null;
    return { noPassword: true };
  };

  email = (control: FormControl): FormErrorValidate => {
    if (
      control.value &&
      /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/.test(control.value)
    )
      return null;
    return { noEmail: true };
  };

  passwordsMatch = (password: string, verifyPassword: string) => {
    return (group: FormGroup) => {
      const controlPass = group.get(password);
      const controlVerifyPass = group.get(verifyPassword);

      if (controlPass.value === controlVerifyPass.value) {
        controlVerifyPass.setErrors(null);
      } else {
        controlVerifyPass.setErrors({ noMatch: true });
      }
    };
  };
}
