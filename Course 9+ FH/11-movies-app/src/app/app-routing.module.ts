import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutContentComponent } from "./layout/layout-content/layout-content.component";

const ROUTES: Routes = [
  {
    path: "content",
    component: LayoutContentComponent,
    loadChildren: () =>
      import("./modules/content/content.module").then((m) => m.ContentModule),
  },
  { path: "**", pathMatch: "full", redirectTo: "content" },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
