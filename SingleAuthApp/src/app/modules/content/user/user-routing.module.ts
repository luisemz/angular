import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserHomeComponent } from "./pages/user-home/user-home.component";
import { UserListComponent } from "./pages/user-list/user-list.component";
import { UserComponent } from "./pages/user/user.component";

const ROUTES: Routes = [
  {
    path: "",
    component: UserHomeComponent,
    children: [
      { path: "list", component: UserListComponent },
      { path: "user", component: UserComponent }
    ]
  },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
