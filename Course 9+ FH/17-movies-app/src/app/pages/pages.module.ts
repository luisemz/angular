import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRatingModule } from 'ngx-bar-rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchComponent],
  imports: [
    CommonModule,
    BarRatingModule,
    FontAwesomeModule,
    ComponentsModule,
    PipesModule,
  ],
})
export class PagesModule {}
