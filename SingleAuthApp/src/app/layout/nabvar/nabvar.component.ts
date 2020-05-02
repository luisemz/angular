import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/core/services/auth.service";
import { User } from "src/app/shared/interfaces/user";

@Component({
  selector: "app-nabvar",
  templateUrl: "./nabvar.component.html",
  styles: [
    `
      .round {
        border-radius: 100%;
        width: 32px;
        height: 32px;
        padding: 0;
      }
    `
  ]
})
export class NabvarComponent implements OnInit {
  username: string;

  constructor(public authServices: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = "";
  }

  getUsername = () => {
    this.authServices
      .userProfile()
      .then((profile: User) => (this.username = profile.username))
      .catch(() => {
        this.logout();
      });
  };

  logout = () => {
    this.authServices.logout();
    this.router.navigate(["/login"]);
  };
}
