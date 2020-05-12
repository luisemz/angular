import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MovieComponent } from "./movie.component";

const ROUTES: Routes = [
  { path: "", component: MovieComponent },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
