import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormTemplateComponent } from "./components/form-template/form-template.component";
import { FormReactiveComponent } from "./components/form-reactive/form-reactive.component";

const routes: Routes = [
  { path: "formtemplate", component: FormTemplateComponent },
  { path: "formreactive", component: FormReactiveComponent },
  { path: "**", pathMatch: "full", redirectTo: "/formreactive" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
