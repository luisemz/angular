import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../../shared/components/home/home.component";

const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "users",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "connects",
    loadChildren: () =>
      import("./connect/connect.module").then(m => m.ConnectModule)
  },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ContentRoutingModule {}
