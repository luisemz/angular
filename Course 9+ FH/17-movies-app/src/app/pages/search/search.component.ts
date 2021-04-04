import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public movies: Movie[];
  public query: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ text }) => {
      this.query = text;
      this.moviesService
        .searchMovies(this.query)
        .subscribe((movies) => (this.movies = movies));
    });
  }
}
