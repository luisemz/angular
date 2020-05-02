import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthGuard } from "./guard/auth.guard";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AuthGuard]
})
export class CoreModule {}
