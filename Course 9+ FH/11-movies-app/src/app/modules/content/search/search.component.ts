import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { MoviesService } from "src/app/core/services/movies.service";
import { AlertService } from "src/app/core/services/alert.service";

import { Movie } from "src/app/shared/interfaces/movie";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  word: string;
  movies: Movie[];

  constructor(
    private _ar: ActivatedRoute,
    private _ms: MoviesService,
    private _as: AlertService,
    private _r: Router
  ) {}

  ngOnInit(): void {
    this.word = "";
    this.movies = [];
    this._ar.params.subscribe((params) => {
      this.word = params["word"];
      if (this.word.length) this.searchMovies();
    });
  }

  searchByWord = () => {
    this._r.navigate(["/content/search/", this.word]);
  };

  searchMovies = () => {
    this._as.loading("Espere un momento!!!");

    this._ms.searchMovies(this.word).subscribe(
      (movies) => {
        this.movies = movies;
        this._as.close();

        if (this.movies.length === 0)
          this._as.alert(
            "info",
            "Not Found",
            "Not found movies in Theatres!!!"
          );
      },
      (err) => {
        this._as.alert("error", "Error", err);
      }
    );
  };
}
