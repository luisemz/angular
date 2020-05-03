import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: []
})
export class UserComponent implements OnInit {
  id: string;

  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => (this.id = params["id"]));
  }
}
