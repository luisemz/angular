import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { BillboardReponse, Movie } from '../interfaces/billboard-response';
import { CreditReponse, Cast } from '../interfaces/credit-response';
import { MovieResponse } from '../interfaces/movie-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl: string;
  private apiKey: string;
  private page: number;
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.tmdb.apiUrl;
    this.apiKey = environment.tmdb.apiKey;
    this.page = 1;
    this.loading = false;
  }

  get params() {
    return {
      api_key: this.apiKey,
      language: 'en-US',
      page: this.page.toString(),
    };
  }

  resetPage() {
    this.page = 1;
  }

  getMovie(id: string): Observable<MovieResponse> {
    const url = `${this.apiUrl}movie/${id}`;
    const params = { ...this.params };
    return this.http
      .get<MovieResponse>(url, { params })
      .pipe(catchError((err) => of(null)));
  }

  getCast(id: string): Observable<Cast[]> {
    const url = `${this.apiUrl}movie/${id}/credits`;
    const params = { ...this.params };
    return this.http
      .get<CreditReponse>(url, { params })
      .pipe(
        map((resp) => resp.cast),
        catchError((err) => of([]))
      );
  }

  getBillboard(): Observable<Movie[]> {
    if (this.loading) return of([]);

    this.loading = true;
    const url = `${this.apiUrl}movie/now_playing`;
    const params = { ...this.params };
    return this.http
      .get<BillboardReponse>(url, { params })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.page += 1;
          this.loading = false;
        })
      );
  }

  searchMovies(query: string): Observable<Movie[]> {
    const url = `${this.apiUrl}search/movie`;
    const params = { ...this.params, page: '1', query };
    return this.http
      .get<BillboardReponse>(url, { params })
      .pipe(map((resp) => resp.results));
  }
}
