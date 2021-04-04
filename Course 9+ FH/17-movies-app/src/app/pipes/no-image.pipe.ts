import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Movie } from '../interfaces/billboard-response';

@Pipe({
  name: 'noImage',
})
export class NoImagePipe implements PipeTransform {
  transform(path: string): string {
    if (!path) return 'assets/no-image.jpg';
    else if (path) return `${environment.tmdb.apiImg}${path}`;
  }
}
