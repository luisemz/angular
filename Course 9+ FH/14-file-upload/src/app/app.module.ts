import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { UploadComponent } from "./components/upload/upload.component";

import { NgDropFilesDirective } from "./directives/ng-drop-files.directive";

import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    UploadComponent,
    NavbarComponent,
    NgDropFilesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
