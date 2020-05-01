import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es";
import localEn from "@angular/common/locales/en";
import localFr from "@angular/common/locales/fr";

import { AppComponent } from "./app.component";
import { CamelcasePipe } from './pipes/camelcase.pipe';
import { SafedomPipe } from './pipes/safedom.pipe';
import { ShowpassPipe } from './pipes/showpass.pipe';

registerLocaleData(localEs);
registerLocaleData(localEn);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent, CamelcasePipe, SafedomPipe, ShowpassPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
