import {
  Component,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ValidatorFn
} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

import { ValidatorsService } from "src/app/core/services/validators.service";
import { AuthService } from "src/app/core/services/auth.service";
import Alert from "src/app/shared/components/alert/alert";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["../../auth.component.css"]
})
export class RegisterComponent implements OnInit, AfterViewChecked {
  form: FormGroup;
  usernameMessage: string;
  showRequiresPass: boolean;
  showRequiresVerifyPass: boolean;

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usernameMessage = "Username is required";

    this.form = this.fb.group({});
    this.createForm();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  createForm = () => {
    /* ------ ADD CONTROLS ------ */
    this.form.addControl(
      "email",
      this.fb.control(null, [Validators.required, this.vs.email])
    );
    this.form.addControl(
      "username",
      this.fb.control(
        null,
        [Validators.required, Validators.minLength(4)],
        [this.vs.userExist]
      )
    );
    this.form.addControl(
      "password",
      this.fb.control(null, [Validators.required, this.vs.password])
    );
    this.form.addControl(
      "verifyPassword",
      this.fb.control(null, [Validators.required, this.vs.password])
    );

    /* ------ ADD VALIDATORS ------ */
    this.form.setValidators(
      <ValidatorFn>this.vs.passwordsMatch("password", "verifyPassword")
    );

    /* ------ ADD LISTNERS ------ */
    this.form.valueChanges.subscribe(_ => {
      if (this.getControl("username").hasError("userExist"))
        this.usernameMessage = "Username not available";
      else this.usernameMessage = "Username is required";
    });
  };

  getControl = (field: string): FormControl => {
    return <FormControl>this.form.get(field);
  };

  disabledField = (field: string, condition: boolean) => {
    if (condition) this.getControl(field).disable();
    else this.getControl(field).enable();
  };

  validateFieldValid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).valid;
  };

  validateFieldInvalid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).invalid;
  };

  validateFieldPending = (field: string) => {
    return this.getControl(field).pending;
  };

  validateFieldVerifyPassword = (field: string, verifyField: string) => {
    return (
      this.getControl(verifyField).touched &&
      this.getControl(field).value !== this.getControl(verifyField).value
    );
  };

  showRequiresPassFn = (condition: boolean) => {
    this.showRequiresPass = condition;
  };

  showRequiresVerifyPassFn = (condition: boolean) => {
    this.showRequiresVerifyPass = condition;
  };

  save = () => {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(c => c.markAsTouched());
      return;
    }

    Alert.loading("Wait please...");
    this.authService.register(this.form.value).subscribe(
      response => {
        Alert.alertNoButtons(
          "success",
          "Register success",
          `${response["message"]}... please login`
        ).finally(() => this.router.navigate(["/auth/login"]));
      },
      (err: HttpErrorResponse) => {
        Alert.alertNoButtons("error", "Register error", err.error.message);
      }
    );
  };
}
