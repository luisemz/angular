import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { CardComponent } from "./components/card/card.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { ShowErrorComponent } from "./components/show-error/show-error.component";
import { ShowInfoComponent } from "./components/show-info/show-info.component";

import { NoimagePipe } from "./pipes/noimage.pipe";
import { SafeDomPipe } from "./pipes/safedom.pipe";

@NgModule({
  declarations: [
    CardComponent,
    LoadingComponent,
    ShowErrorComponent,
    ShowInfoComponent,

    NoimagePipe,
    SafeDomPipe
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,

    CardComponent,
    LoadingComponent,
    ShowErrorComponent,
    ShowInfoComponent,

    NoimagePipe,
    SafeDomPipe
  ]
})
export class SharedModule {}
