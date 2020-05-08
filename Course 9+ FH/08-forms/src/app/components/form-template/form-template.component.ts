import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CountryService } from "src/app/services/country.service";

import { User } from "src/app/interfaces/user";
import { Country } from "src/app/interfaces/country";

@Component({
  selector: "app-form-template",
  templateUrl: "./form-template.component.html",
  styleUrls: ["./form-template.component.css"]
})
export class FormTemplateComponent implements OnInit {
  usuario: User;
  paises: [Country];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.usuario = {
      nombre: "Luis Eduardo",
      apellido: "Mosquera Zapata",
      correo: "luis.mz@icloud.com",
      direccion: {
        direccion: null,
        ciudad: null,
        casa: null
      },
      pais: null,
      genero: null
    };

    // this.usuario = {
    //   nombre: "",
    //   apellido: "",
    //   correo: "",
    //   pais: ""
    // };

    this.countryService.getCountries().subscribe((response: [Country]) => {
      this.paises = response;
      this.paises.unshift({
        name: "[Seleccione un País]",
        alpha2Code: null,
        alpha3Code: null,
        area: null,
        region: null,
        population: null,
        subregion: null,
        flag: null,
        capital: null,
        cioc: null,
        nativeName: null,
        numericCode: null
      });
    });
  }

  save = (form: NgForm) => {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
    console.log(form.value);
  };
}
