import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { environment } from "../environments/environment";
import { NabvarComponent } from "./components/nabvar/nabvar.component";
import { ChatComponent } from "./components/chat/chat.component";
import { AuthComponent } from "./components/auth/auth.component";

import { ChatService } from "./providers/chat.service";

@NgModule({
  declarations: [AppComponent, NabvarComponent, ChatComponent, AuthComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
