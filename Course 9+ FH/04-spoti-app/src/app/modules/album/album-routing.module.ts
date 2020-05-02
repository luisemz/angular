import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlbumComponent } from "./pages/album.component";

const ROUTES: Routes = [{ path: "", component: AlbumComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
