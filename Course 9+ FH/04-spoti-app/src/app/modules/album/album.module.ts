import { NgModule } from "@angular/core";

import { AlbumRoutingModule } from "./album-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { AlbumComponent } from "./pages/album.component";

@NgModule({
  declarations: [AlbumComponent],
  imports: [AlbumRoutingModule, SharedModule]
})
export class AlbumModule {}
