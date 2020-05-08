import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormTemplateComponent } from "./components/form-template/form-template.component";
import { FormReactiveComponent } from "./components/form-reactive/form-reactive.component";
import { PasswordRequiresComponent } from './components/password-requires/password-requires.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    PasswordRequiresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
