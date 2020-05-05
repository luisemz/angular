import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PricesComponent } from "./prices.component";

const ROUTES: Routes = [{ path: "", component: PricesComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PricesRoutingModule {}
