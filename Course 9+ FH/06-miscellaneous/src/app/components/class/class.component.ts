import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html"
})
export class ClassComponent implements OnInit {
  className: string;
  loading: boolean;

  constructor() {}

  ngOnInit(): void {
    this.className = "alert-primary";
    this.loading = false;
  }

  changeClass = (type: string): void => {
    this.className = type;
  };

  process = () => {
    this.loading = true;

    setTimeout(() => (this.loading = false), 3000);
  };
}
