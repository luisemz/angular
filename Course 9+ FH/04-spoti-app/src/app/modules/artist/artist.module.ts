import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { ArtistRoutingModule } from "./artist-routing.module";

import { ArtistComponent } from "./pages/artist.component";

@NgModule({
  declarations: [ArtistComponent],
  imports: [ArtistRoutingModule, SharedModule]
})
export class ArtistModule {}
