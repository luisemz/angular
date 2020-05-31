import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  countries: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((countries: any[]) => (this.countries = countries));
  }

  drop = (event: CdkDragDrop<any>) => {
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  };
}
