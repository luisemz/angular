import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProtectedRoutingModule } from "./protected-routing.module";
import { ProtectedComponent } from "./protected.component";

import { NoimagePipe } from "../../pipes/noimage.pipe";

@NgModule({
  declarations: [ProtectedComponent, NoimagePipe],
  imports: [CommonModule, ProtectedRoutingModule]
})
export class ProtectedModule {}
