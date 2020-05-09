import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ChatService } from "src/app/providers/chat.service";

@Component({
  selector: "app-nabvar",
  templateUrl: "./nabvar.component.html",
  styleUrls: ["./nabvar.component.css"],
})
export class NabvarComponent implements OnInit {
  constructor(public _cs: ChatService, private router: Router) {}

  ngOnInit(): void {}

  logout = () => {
    this._cs
      .logout()
      .then(() => {
        this.router.navigateByUrl("auth");
      })
      .catch((err) => {});
  };
}
