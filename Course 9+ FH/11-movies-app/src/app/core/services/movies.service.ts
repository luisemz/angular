import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { Movie } from "src/app/shared/interfaces/movie";
import { Observable } from "rxjs";

/**
 * The MovieDatabase
 * https://www.themoviedb.org/
 * https://developers.themoviedb.org/
 */

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private apiUrl: string;
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.movies.url;
    this.apiKey = environment.movies.key;
  }

  private getFirstAndLastDate = () => {
    let today = new Date(),
      firstDate = new Date(today.getFullYear(), today.getMonth(), 1),
      lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return {
      firstDate: `${firstDate.getFullYear()}-${(
        "000" +
        (firstDate.getMonth() + 1)
      ).slice(-2)}-${("000" + firstDate.getDate()).slice(-2)}`,
      lastDate: `${lastDate.getFullYear()}-${(
        "000" +
        (lastDate.getMonth() + 1)
      ).slice(-2)}-${("000" + lastDate.getDate()).slice(-2)}`,
    };
  };

  //=== === === === === === === === === === === === === === === === ===//

  getMoviesTops = (): Observable<Movie[]> => {
    let url = `${this.apiUrl}/discover/movie?sort_by=popularity.desc&language=es&api_key=${this.apiKey}`;
    return this.http.get(url).pipe(map((response) => response["results"]));
  };

  getMoviesTopsKids = (): Observable<Movie[]> => {
    let url = `${this.apiUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es&api_key=${this.apiKey}`;
    return this.http.get(url).pipe(map((response) => response["results"]));
  };

  getMoviesTheatres = (): Observable<Movie[]> => {
    let firstAndLastDate = this.getFirstAndLastDate();
    let url = `${this.apiUrl}/discover/movie?primary_release_date.gte=${firstAndLastDate.firstDate}&primary_release_date.lte=${firstAndLastDate.lastDate}&language=es&api_key=${this.apiKey}`;
    return this.http.get(url).pipe(map((response) => response["results"]));
  };

  getMovie = (id: string) => {
    let url = `${this.apiUrl}/movie/${id}?language=es&api_key=${this.apiKey}`;
    return this.http.get(url);
  };

  searchMovies = (word: string) => {
    let url = `${this.apiUrl}/search/movie?query=${word}&sort_by=popularity.desc&language=es&api_key=${this.apiKey}`;
    return this.http.get(url).pipe(map((response) => response["results"]));
  };
}
