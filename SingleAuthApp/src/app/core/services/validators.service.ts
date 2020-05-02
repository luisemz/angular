import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ApiService } from "./api.service";

interface FormErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: "root"
})
export class ValidatorsService {
  constructor(private apiService: ApiService) {}

  userExist = (control: FormControl): Promise<FormErrorValidate> => {
    return new Promise(resolve => {
      /* -- USE APISERVICE -- */
      setTimeout(() => {
        if (control.value.toLowerCase() === "eduardo")
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
