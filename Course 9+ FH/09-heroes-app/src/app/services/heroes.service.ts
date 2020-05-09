import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { HeroeModel } from "../models/heroe.model";

@Injectable({
  providedIn: "root",
})
export class HeroesService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "https://rest-app-c0890.firebaseio.com";
  }

  private createArray = (heroeObj: Object) => {
    let heroes: HeroeModel[] = [];
    if (heroeObj === null) return [];
    Object.keys(heroeObj).forEach((key) => {
      const heroe: HeroeModel = heroeObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;
  };

  createHeroe = (heroe: HeroeModel) => {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((response) => {
        heroe.id = response["name"];
        return heroe;
      })
    );
  };

  updateHeroe = (heroe: HeroeModel) => {
    const heroeUpdate = { ...heroe };
    delete heroeUpdate.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeUpdate);
  };

  getHeroes = () => {
    return this.http.get(`${this.url}/heroes.json`).pipe(map(this.createArray));
  };

  getHereo = (id: string) => {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  };

  deleteHeroe = (id: string) => {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  };
}
