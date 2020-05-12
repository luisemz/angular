import { Pipe, PipeTransform } from "@angular/core";

import { environment } from "src/environments/environment";
import { Movie } from "../interfaces/movie";

@Pipe({
  name: "noimage",
})
export class NoimagePipe implements PipeTransform {
  transform(movie: Movie): string {
    if (!movie.poster_path && !movie.backdrop_path)
      return "assets/images/noimage.png";
    else if (movie.poster_path)
      return `${environment.movies.urlImg}${movie.poster_path}`;
    else if (movie.backdrop_path)
      return `${environment.movies.urlImg}${movie.backdrop_path}`;
  }
}
