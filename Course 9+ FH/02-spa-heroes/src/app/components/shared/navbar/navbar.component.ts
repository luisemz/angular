import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  searchHeroe = (event: Event, text: string) => {
    event.preventDefault();
    if (text.length === 0) return;
    this._router.navigate(["/heroes-search", text]);
  };
}
