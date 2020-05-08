import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "https://restcountries.eu/rest/v2/lang/es";
  }

  getCountries = () => {
    return this.http.get(this.url);
  };
}
