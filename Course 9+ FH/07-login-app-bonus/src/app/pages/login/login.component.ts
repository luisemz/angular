import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

import { UsuarioModel } from "../../models/usuario.model";

import { AuthService } from "src/app/services/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  usuario: Partial<UsuarioModel>;
  remember: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.remember = false;
    if (localStorage.getItem("username")) {
      this.usuario.username = localStorage.getItem("username");
      this.remember = true;
    }
  }

  login = (form: NgForm) => {
    if (form.invalid) return;
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

    this.authService.login(this.usuario).subscribe(
      () => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          width: "350px",
          timerProgressBar: true,
          onOpen: toast => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
          showClass: {
            popup: "animated fadeInRight faster"
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        if (this.remember)
          localStorage.setItem("username", this.usuario.username);
        else localStorage.removeItem("username");
        this.router.navigate(["/home"]);
      },
      (err: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Login error",
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
}
