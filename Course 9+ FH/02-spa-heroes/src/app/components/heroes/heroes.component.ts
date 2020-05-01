import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "src/app/interfaces/heroe";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html"
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
}
