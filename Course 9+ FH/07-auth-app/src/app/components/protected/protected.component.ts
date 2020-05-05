import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-protected",
  templateUrl: "./protected.component.html"
})
export class ProtectedComponent implements OnInit {
  profile: any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.userProfile$.subscribe(profile => {
      this.profile = profile;
    });
  }
}
