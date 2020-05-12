import { Component, OnInit } from "@angular/core";

import { MoviesService } from "src/app/core/services/movies.service";
import { AlertService } from "src/app/core/services/alert.service";

import { Movie } from "src/app/shared/interfaces/movie";

@Component({
  selector: "app-tops",
  templateUrl: "./tops.component.html",
  styles: [],
})
export class TopsComponent implements OnInit {
  movies: Movie[];

  constructor(private _ms: MoviesService, private _as: AlertService) {}

  ngOnInit(): void {
    this._as.loading("Espere un momento!!!");

    this._ms.getMoviesTops().subscribe(
      (movies) => {
        this.movies = movies;
        this._as.close();

        if (this.movies.length === 0)
          this._as.alert("info", "Not Found", "Not found movies Tops!!!");
      },
      (err) => {
        this._as.alert("error", "Error", err);
      }
    );
  }
}
