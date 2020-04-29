import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  buttonName: string;
  show: boolean;
  sentence: {
    message: string;
    author: string;
  };
  avengers: string[];

  constructor() {
    this.buttonName = "Hide";
    this.show = true;
    this.sentence = {
      message: "Un gran poder requiere una gran responsabilidad",
      author: "Ben Parker"
    };
    this.avengers = [
      "Thor",
      "Captain America",
      "Hulk",
      "Spiderman",
      "Black Panter",
      "Iron Man"
    ];
  }

  ngOnInit = (): void => {};

  handleClic = (): void => {
    this.show = !this.show;
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  };
}
