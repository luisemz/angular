import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { BarRatingModule } from 'ngx-bar-rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';

import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    CastSlideshowComponent,
    MoviesPosterGridComponent,
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    CastSlideshowComponent,
    MoviesPosterGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    BarRatingModule,
    FontAwesomeModule,
    PipesModule,
  ],
})
export class ComponentsModule {}
