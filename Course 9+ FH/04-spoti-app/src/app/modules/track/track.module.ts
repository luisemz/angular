import { NgModule } from "@angular/core";

import { TrackRoutingModule } from "./track-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { TrackComponent } from "./pages/track.component";

@NgModule({
  declarations: [TrackComponent],
  imports: [TrackRoutingModule, SharedModule]
})
export class TrackModule {}
