import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchComponent } from "./pages/search.component";

const ROUTES: Routes = [{ path: "", component: SearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
