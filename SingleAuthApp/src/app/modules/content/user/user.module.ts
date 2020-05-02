import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";

import { UserComponent } from "./pages/user/user.component";
import { UserHomeComponent } from "./pages/user-home/user-home.component";
import { UserListComponent } from "./pages/user-list/user-list.component";

@NgModule({
  declarations: [UserComponent, UserHomeComponent, UserListComponent],
  imports: [UserRoutingModule, CommonModule]
})
export class UserModule {}
