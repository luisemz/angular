import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "search/:word",
    loadChildren: () =>
      import("./search/search.module").then((m) => m.SearchModule),
  },
  {
    path: "movie/:id",
    loadChildren: () =>
      import("./movie/movie.module").then((m) => m.MovieModule),
  },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
