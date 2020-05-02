import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [NoAuthGuard, AuthGuard]
})
export class CoreModule {}
