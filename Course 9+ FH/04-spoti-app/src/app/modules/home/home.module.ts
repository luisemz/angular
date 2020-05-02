import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { HomeComponent } from "./pages/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule]
})
export class HomeModule {}
