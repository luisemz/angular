import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-info",
  templateUrl: "./show-info.component.html",
  styles: []
})
export class ShowInfoComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
