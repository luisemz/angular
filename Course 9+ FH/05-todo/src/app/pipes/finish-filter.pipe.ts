import { Pipe, PipeTransform } from "@angular/core";

import { List } from "../models/list.model";

@Pipe({
  name: "finishFilter",
  pure: false,
})
export class FinishFilterPipe implements PipeTransform {
  transform(list: List[], finish: boolean = true): List[] {
    return list.filter((item) => item.finish === finish);
  }
}
