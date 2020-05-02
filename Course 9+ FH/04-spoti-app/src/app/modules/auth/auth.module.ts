import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { AuthComponent } from "./pages/auth.component";

@NgModule({
  declarations: [AuthComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}
