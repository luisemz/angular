import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NabvarComponent } from "./components/shared/nabvar/nabvar.component";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { CssComponent } from "./components/css/css.component";
import { ClassComponent } from "./components/class/class.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
import { NewUserComponent } from "./components/user/new-user.component";
import { EditUserComponent } from "./components/user/edit-user.component";
import { DetailUserComponent } from "./components/user/detail-user.component";

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    UserComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    HighlightedDirective,
    NgSwitchComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
