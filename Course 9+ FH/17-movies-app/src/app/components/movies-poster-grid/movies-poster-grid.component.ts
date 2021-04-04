import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
