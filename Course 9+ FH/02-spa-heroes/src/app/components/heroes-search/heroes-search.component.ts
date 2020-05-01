import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "src/app/interfaces/heroe";

@Component({
  selector: "app-heroes-search",
  templateUrl: "./heroes-search.component.html"
})
export class HeroesSearchComponent implements OnInit {
  heroes: Heroe[];
  search: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _herosServices: HeroesService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.search = params["text"];
      this.heroes = this._herosServices.searchsHeroe(this.search);
    });
  }
}
