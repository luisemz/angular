import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  name: string;
  lastName: string;

  constructor() {
    this.name = "Luis";
    this.lastName = "Mosquera";
  }

  ngOnInit(): void {}

  getCurrentYear = (): number => new Date().getFullYear();
}
