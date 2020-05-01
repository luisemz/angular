import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camelcase"
})
export class CamelcasePipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();
    let valueSplit = value.split(" ");
    if (all) {
      valueSplit = valueSplit.map(
        value => `${value[0].toUpperCase()}${value.substr(1)}`
      );
    } else {
      valueSplit[0] = `${valueSplit[0][0].toUpperCase()}${valueSplit[0].substr(
        1
      )}`;
    }
    return valueSplit.join(" ");
  }
}
