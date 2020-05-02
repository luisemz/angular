import { NgModule } from "@angular/core";
import { ContentRoutingModule } from "./content-routing.module";

import { CommonModule } from "@angular/common";
import { HomeComponent } from "../../shared/components/home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [ContentRoutingModule, CommonModule]
})
export class ContentModule {}
