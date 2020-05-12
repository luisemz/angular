import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { MoviesService } from "src/app/core/services/movies.service";
import { AlertService } from "src/app/core/services/alert.service";

import { Movie } from "src/app/shared/interfaces/movie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private _ar: ActivatedRoute,
    private _ms: MoviesService,
    private _as: AlertService,
    private _r: Router,
    private _l: Location
  ) {}

  ngOnInit(): void {
    this._as.loading("Espere un momento!!!");
    this._ar.params.subscribe((params) => {
      this._ms.getMovie(params["id"]).subscribe(
        (movie: Movie) => {
          this.movie = movie;
          this._as.close();
          if (!this.movie) this._r.navigate(["/content/home/tops"]);
        },
        (err) => {
          this._as.alert("error", "Error", err);
        }
      );
    });
  }

  goBack = () => this._l.back();
}
