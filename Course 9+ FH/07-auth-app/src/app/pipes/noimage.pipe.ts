import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimage"
})
export class NoimagePipe implements PipeTransform {
  transform(image: string): string {
    if (!image) return "assets/img/noimage.png";
    else return image;
  }
}
