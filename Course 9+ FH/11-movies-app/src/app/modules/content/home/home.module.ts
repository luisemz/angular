import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { TopsComponent } from "./pages/tops/tops.component";
import { TopsKidsComponent } from "./pages/tops-kids/tops-kids.component";
import { TheatresComponent } from "./pages/theatres/theatres.component";

@NgModule({
  declarations: [
    HomeComponent,
    TopsComponent,
    TopsKidsComponent,
    TheatresComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
