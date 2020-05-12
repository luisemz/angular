import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { ContentRoutingModule } from "./content-rounting.module";

@NgModule({
  declarations: [],
  imports: [SharedModule, ContentRoutingModule],
})
export class ContentModule {}
