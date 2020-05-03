import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [ListComponent],
  imports: [IonicModule, RouterModule, CommonModule, PipesModule],
  exports: [ListComponent],
})
export class ComponentsModule {}
