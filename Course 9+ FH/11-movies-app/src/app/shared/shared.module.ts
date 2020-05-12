import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { CardComponent } from "./components/card/card.component";
import { NoimagePipe } from "./pipes/noimage.pipe";

@NgModule({
  declarations: [CardComponent, NoimagePipe],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,

    CardComponent,

    NoimagePipe,
  ],
})
export class SharedModule {}
