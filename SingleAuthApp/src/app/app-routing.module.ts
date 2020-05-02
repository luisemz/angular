import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";

import { NoAuthGuard } from "./core/guards/no-auth.guard";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "auth",
    component: AuthLayoutComponent,
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "content",
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/content/content.module").then(m => m.ContentModule)
  },
  { path: "", pathMatch: "full", redirectTo: "auth" },
  { path: "**", pathMatch: "full", redirectTo: "auth" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
