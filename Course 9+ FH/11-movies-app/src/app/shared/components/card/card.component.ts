import { Component, OnInit, Input } from "@angular/core";

import { Movie } from "../../interfaces/movie";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewMovie = () => {
    this.router.navigate(["/content/movie", this.movie.id]);
  };
}
