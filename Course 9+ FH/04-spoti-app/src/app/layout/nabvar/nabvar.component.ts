import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/core/services/auth.service";

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
  profile: any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(profile => (this.profile = profile));
  }
}
