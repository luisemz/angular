import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth.guard";

const ROUTES: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./components/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "prices",
    loadChildren: () =>
      import("./components/prices/prices.module").then(m => m.PricesModule),
    canActivate: [AuthGuard]
  },
  {
    path: "protected",
    loadChildren: () =>
      import("./components/protected/protected.module").then(
        m => m.ProtectedModule
      ),
    canActivate: [AuthGuard]
  },
  { path: "**", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
