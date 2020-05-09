import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ChatService } from "src/app/providers/chat.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  constructor(private _cs: ChatService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      if (this._cs.user.uid) this.router.navigateByUrl("chat");
    }, 1000);
  }

  signIn = (type: string) => {
    this._cs
      .login(type)
      .then(() => this.router.navigateByUrl("chat"))
      .catch((err) => {});
  };
}
