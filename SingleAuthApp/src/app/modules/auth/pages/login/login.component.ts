import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

import { ValidatorsService } from "src/app/core/services/validators.service";
import { AuthService } from "src/app/core/services/auth.service";
import Alert from "src/app/shared/components/alert/alert";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../../auth.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  showRequiresPass: boolean;

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.showRequiresPass = false;

    this.form = this.fb.group({});
    this.createForm();
    this.setData();
  }

  createForm = () => {
    this.form.addControl(
      "username",
      this.fb.control(null, [Validators.required, Validators.minLength(4)])
    );
    this.form.addControl(
      "password",
      this.fb.control(null, [Validators.required, this.vs.password])
    );
    this.form.addControl("remember", this.fb.control(false));
  };

  setData = () => {
    if (localStorage.getItem("username")) {
      this.form.reset({
        username: localStorage.getItem("username"),
        remember: true
      });
    }
  };

  getControl = (field: string): FormControl => {
    return <FormControl>this.form.get(field);
  };

  disabledByInvalidField = (field: string) => {
    return this.getControl(field).invalid;
  };

  validateFieldInvalid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).invalid;
  };

  save = () => {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(c => c.markAsTouched());
      return;
    }

    Alert.loading("Wait please...");
    this.authService.login(this.form.value).subscribe(
      () => {
        Alert.toast("success", "Signed in successfully");
        if (this.form.value.remember)
          localStorage.setItem("username", this.form.value.username);
        else localStorage.removeItem("username");
        this.router.navigate(["/content"]);
      },
      (err: HttpErrorResponse) => {
        Alert.alertNoButtons("error", "Login error", err.error.message);
      }
    );
  };
}
