import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ArtistComponent } from "./pages/artist.component";

const ROUTES: Routes = [{ path: "", component: ArtistComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {}
