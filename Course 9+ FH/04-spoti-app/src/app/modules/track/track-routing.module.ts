import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TrackComponent } from "./pages/track.component";

const ROUTES: Routes = [{ path: "", component: TrackComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TrackRoutingModule {}
