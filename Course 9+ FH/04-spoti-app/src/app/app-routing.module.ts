import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/guard/auth.guard";

import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";

const ROUTES: Routes = [
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "content",
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./modules/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "search",
        loadChildren: () =>
          import("./modules/search/search.module").then(m => m.SearchModule)
      },
      {
        path: "album/:id",
        loadChildren: () =>
          import("./modules/album/album.module").then(m => m.AlbumModule)
      },
      {
        path: "artist/:id",
        loadChildren: () =>
          import("./modules/artist/artist.module").then(m => m.ArtistModule)
      },
      {
        path: "track/:id",
        loadChildren: () =>
          import("./modules/track/track.module").then(m => m.TrackModule)
      },
      { path: "**", pathMatch: "full", redirectTo: "home" }
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "auth" },
  { path: "**", pathMatch: "full", redirectTo: "auth" }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
