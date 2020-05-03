import { Routes } from "@angular/router";

import { NewUserComponent } from "./new-user.component";
import { EditUserComponent } from "./edit-user.component";
import { DetailUserComponent } from "./detail-user.component";

export const USER_ROUTES: Routes = [
  { path: "new", component: NewUserComponent },
  { path: "edit", component: EditUserComponent },
  { path: "detail", component: DetailUserComponent },
  { path: "**", pathMatch: "full", redirectTo: "edit" }
];
