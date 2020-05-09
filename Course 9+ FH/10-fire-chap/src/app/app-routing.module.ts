import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { ChatComponent } from "./components/chat/chat.component";

const routes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "chat", component: ChatComponent },
  { path: "**", pathMatch: "full", redirectTo: "auth" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
