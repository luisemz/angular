import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';

import { MoviesService } from '../../services/movies.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Cast } from '../../interfaces/credit-response';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public cast: Cast[];
  public movie: MovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router
  ) {
    this.cast = [];
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.moviesService.getMovie(id),
      this.moviesService.getCast(id),
    ]).subscribe(([movie, cast]) => {
      if (!movie) this.router.navigateByUrl('/home');
      this.movie = movie;
      this.cast = cast.filter((actor) => actor.profile_path !== null);
    });
  }

  onBack() {
    this.location.back();
  }
}
