import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  word: string;

  constructor(private _r: Router) {}

  ngOnInit(): void {
    this.word = "";
  }

  searchByWord = () => {
    if (this.word.length) {
      this._r.navigate(["/content/search", this.word]);
      this.word = "";
    }
  };
}
