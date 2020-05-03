import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-user",
  template: `
    <p>
      edit-user works!
    </p>
  `,
  styles: []
})
export class EditUserComponent implements OnInit {
  id: string;

  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activedRoute.parent.params.subscribe(
      params => (this.id = params["id"])
    );
  }
}
