import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
