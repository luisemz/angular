import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProtectedComponent } from "./pages/protected/protected.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    ProtectedComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
