import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-style",
  template: `
    <p [style.fontSize.px]="fontSize" [style.color]="color">
      Hello World, this is an tikect
    </p>

    <button class="btn btn-success mr-2" (click)="fontSize = fontSize + 5">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-danger mr-5" (click)="fontSize = fontSize - 5">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-outline-primary" (click)="changeColor()">
      <i class="fa fa-sync" aria-hidden="true"></i> Change Color
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  fontSize: number;
  color: string;

  constructor() {}

  ngOnInit(): void {
    this.fontSize = 20;
    this.color = "black";
  }

  changeColor = () => {
    switch (this.color) {
      case "red":
        this.color = "black";
        break;
      case "black":
        this.color = "red";
        break;
      default:
        this.color = "black";
        break;
    }
  };
}
