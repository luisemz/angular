import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  name: string;
  lastName: string;

  constructor() {
    this.name = "Luis";
    this.lastName = "Mosquera";
  }

  getCurrentYear = (): number => new Date().getFullYear();
}
