import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[DataValidate]"
})
export class DataValidateDirective {
  @Input("DataValidate") text: string;

  constructor() {}
}
