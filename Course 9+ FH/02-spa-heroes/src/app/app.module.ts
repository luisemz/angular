import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// ROUTES
import { AppRoutingModule } from "./app-routing.module";

// SERVICES
import { HeroesService } from "./services/heroes.service";

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesSearchComponent } from './components/heroes-search/heroes-search.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesSearchComponent,
    HeroeCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
