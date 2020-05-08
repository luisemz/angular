import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

import { UsuarioModel } from "src/app/models/usuario.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(public authServices: AuthService, private router: Router) {}

  ngOnInit() {
    this.username = "";
  }

  getUsername = () => {
    this.authServices
      .userProfile()
      .then((profile: UsuarioModel) => (this.username = profile.username))
      .catch(() => {
        this.logout();
      });
  };

  logout = () => {
    this.authServices.logout();
    this.router.navigate(["/login"]);
  };
}
