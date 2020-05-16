import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";

import { AppComponent } from "./app.component";

import { MaterialModule } from "./material.module";
import { MapsComponent } from "./components/maps/maps.component";
import { DialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  declarations: [AppComponent, MapsComponent, DialogComponent],
  imports: [BrowserModule, GoogleMapsModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
