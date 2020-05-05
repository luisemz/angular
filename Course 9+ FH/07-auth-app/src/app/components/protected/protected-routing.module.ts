import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProtectedComponent } from "./protected.component";

const ROUTES: Routes = [{ path: "", component: ProtectedComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule {}
