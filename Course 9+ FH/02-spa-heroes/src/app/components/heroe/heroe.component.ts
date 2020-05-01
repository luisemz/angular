import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "src/app/interfaces/heroe";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html"
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _herosServices: HeroesService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._herosServices.getHeroe(params["id"]);
    });
  }
}
