import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";

import { MovieComponent } from "./movie.component";
import { MovieRoutingModule } from "./movie-routing.module";

@NgModule({
  declarations: [MovieComponent],
  imports: [MovieRoutingModule, SharedModule],
})
export class MovieModule {}
