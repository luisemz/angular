import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { DonusComponent } from './components/donus/donus.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [AppComponent, LineComponent, BarComponent, DonusComponent, RadarComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
