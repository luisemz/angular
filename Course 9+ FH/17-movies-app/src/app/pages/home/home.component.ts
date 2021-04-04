import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[];
  public moviesSlideshow: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = [];
    this.moviesSlideshow = [];
  }

  ngOnInit(): void {
    this.moviesService.getBillboard().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.moviesService.loading) return;

    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      this.moviesService.getBillboard().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }
}
