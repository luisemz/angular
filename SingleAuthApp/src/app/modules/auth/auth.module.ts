import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";

import { DataValidateDirective } from "./directives/data-validate.directive";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { PassRequiresComponent } from "./components/pass-requires.component";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    DataValidateDirective,

    LoginComponent,
    RegisterComponent,
    PassRequiresComponent
  ],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}
