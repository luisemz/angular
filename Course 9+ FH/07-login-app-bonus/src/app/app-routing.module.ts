import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegistroComponent } from "./pages/registro/registro.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProtectedComponent } from "./pages/protected/protected.component";

import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";

const routes: Routes = [
  {
    path: "register",
    component: RegistroComponent,
    canActivate: [NoAuthGuard]
  },
  { path: "login", component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: "protected",
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  },
  { path: "", pathMatch: "full", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
