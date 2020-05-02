import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountryCode = (name: string): Observable<string> => {
    return this.http.get(`${environment.countryConfig.apiUrl}${name}`).pipe(
      map((response: any[]) => {
        if (response.length) {
          return response[0].alpha2Code;
        } else return "CO";
      })
    );
  };
}
