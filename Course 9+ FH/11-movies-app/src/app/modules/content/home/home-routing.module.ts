import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TopsComponent } from "./pages/tops/tops.component";
import { TheatresComponent } from "./pages/theatres/theatres.component";
import { TopsKidsComponent } from "./pages/tops-kids/tops-kids.component";

const ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "theatres", component: TheatresComponent },
      { path: "tops", component: TopsComponent },
      { path: "topsKids", component: TopsKidsComponent },
      { path: "**", pathMatch: "full", redirectTo: "theatres" },
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
