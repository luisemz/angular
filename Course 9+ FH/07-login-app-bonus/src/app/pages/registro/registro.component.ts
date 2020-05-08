import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

import { UsuarioModel } from "src/app/models/usuario.model";

import { AuthService } from "src/app/services/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html"
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  verifyPassword: string;
  verifyPasswordCondition: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.verifyPasswordCondition = false;
  }

  register = (form: NgForm) => {
    if (form.invalid || !this.verifyPasswordCondition) return;
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      title: "Wait please...",
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
    Swal.showLoading();

    this.authService.register(this.usuario).subscribe(
      response => {
        Swal.fire({
          icon: "success",
          title: "Register",
          text: `${response["message"]}... please login`,
          showConfirmButton: false,
          showClass: {
            popup: "animated fadeInDown faster"
          },
          hideClass: {
            popup: "animated fadeOutUp faster"
          }
        }).finally(() => this.router.navigate(["/login"]));
      },
      (err: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Register error",
          text: `${err.error.message}`,
          showConfirmButton: false,
          showClass: {
            popup: "animated fadeInDown faster"
          },
          hideClass: {
            popup: "animated fadeOutUp faster"
          }
        });
      }
    );
  };

  handelePassword = (form: NgForm) => {
    if (
      form.controls["password"].value === form.controls["verifyPassword"].value
    )
      this.verifyPasswordCondition = true;
    else this.verifyPasswordCondition = false;
  };
}
