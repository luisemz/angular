import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-switch",
  templateUrl: "./ng-switch.component.html",
  styles: []
})
export class NgSwitchComponent implements OnInit {
  alert: string;

  constructor() {}

  ngOnInit(): void {
    this.alert = "info";
  }
}
