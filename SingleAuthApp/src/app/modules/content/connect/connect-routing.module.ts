import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConnectComponent } from "./connect.component";

const ROUTES: Routes = [{ path: "", component: ConnectComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ConnectRoutingModule {}
