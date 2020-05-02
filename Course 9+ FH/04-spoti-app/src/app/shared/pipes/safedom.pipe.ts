import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { environment } from "../../../environments/environment";

@Pipe({
  name: "safedom"
})
export class SafeDomPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      `${environment.spotifyConfig.embedUrl}${value}`
    );
  }
}
