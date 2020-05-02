import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-error",
  templateUrl: "./show-error.component.html"
})
export class ShowErrorComponent implements OnInit {
  @Input() message?: string;

  constructor() {}

  ngOnInit(): void {}
}
