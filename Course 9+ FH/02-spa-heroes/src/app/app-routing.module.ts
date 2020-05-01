import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { HeroesSearchComponent } from "./components/heroes-search/heroes-search.component";

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroes-search/:text", component: HeroesSearchComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "about", component: AboutComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
