import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  ValidatorFn,
  FormControl
} from "@angular/forms";

import { CountryService } from "src/app/services/country.service";

import { User } from "src/app/interfaces/user";
import { Country } from "src/app/interfaces/country";
import { ValidatorsService } from "src/app/services/validators.service";

@Component({
  selector: "app-form-reactive",
  templateUrl: "./form-reactive.component.html",
  styleUrls: ["./form-reactive.component.css"]
})
export class FormReactiveComponent implements OnInit {
  usuario: User;
  paises: [Country];

  form: FormGroup;
  showRequiresPass: boolean;
  showRequiresVerifyPass: boolean;

  constructor(
    private fb: FormBuilder,
    private cs: CountryService,
    private vs: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.createForm();
    this.setData();

    this.cs.getCountries().subscribe((response: [Country]) => {
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

  createForm = () => {
    /* ------ ADD CONTROLS ------ */
    this.form.addControl(
      "nombre",
      this.fb.control(null, [Validators.required, Validators.minLength(4)])
    );
    this.form.addControl(
      "apellido",
      this.fb.control(null, [Validators.required, Validators.minLength(4)])
    );
    this.form.addControl(
      "correo",
      this.fb.control(null, [Validators.required, this.vs.email])
    );
    this.form.addControl(
      "usuario",
      this.fb.control(null, [Validators.required], [this.vs.userExist])
    );
    this.form.addControl(
      "contrasena",
      this.fb.control(null, [Validators.required, this.vs.password])
    );
    this.form.addControl(
      "verificarContrasena",
      this.fb.control(null, [Validators.required, this.vs.password])
    );
    this.form.addControl(
      "direccion",
      this.fb.group({
        direccion: [null, [Validators.required, Validators.minLength(3)]],
        ciudad: [null, [Validators.required, Validators.minLength(4)]],
        casa: [null, [Validators.required, Validators.minLength(2)]]
      })
    );
    this.form.addControl(
      "pais",
      this.fb.control(null, [Validators.required], [])
    );
    this.form.addControl("pasatiempos", this.fb.array([]));

    /* ------ ADD VALIDATORS ------ */
    this.form.setValidators(
      <ValidatorFn>this.vs.passwordsMatch("contrasena", "verificarContrasena")
    );

    /* ------ ADD LISTNERS ------ */
    // this.form.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
    // this.form.statusChanges.subscribe(status => {
    //   console.log(status);
    // });

    this.getControl("nombre").valueChanges.subscribe(value => {
      console.log(value);
    });
  };

  setData = () => {
    this.form.reset({
      nombre: "Luis",
      apellido: "Mosquera",
      correo: "luis.mz@icloud.com",
      direccion: {
        direccion: "Calle 1 # 1-50",
        ciudad: "Cali",
        casa: "Piso 1"
      },
      pais: "COL"
    });
  };

  usuarioNoValid = (field: string) => {
    const control = this.getControl(field);
    return control.errors ? control.errors["userExist"] : false;
  };

  validateFieldValid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).valid;
  };

  validateFieldInvalid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).invalid;
  };

  validateFieldVerifyPassword = (field: string, verifyField: string) => {
    return (
      this.getControl(verifyField).touched &&
      this.getControl(field).value !== this.getControl(verifyField).value
    );
  };

  getControl = (field: string): FormControl => {
    return <FormControl>this.form.get(field);
  };

  disabledField = (field: string, condition: boolean) => {
    if (condition) this.getControl(field).disable();
    else this.getControl(field).enable();
  };

  validateArrayFieldInvalid = (arrayField: string, index: number) => {
    const constrols = this.getControls(arrayField);
    return constrols.at(index).touched && constrols.at(index).invalid;
  };

  getControls = (arrayField: string): FormArray => {
    return <FormArray>this.form.get(arrayField);
  };

  addControl = (arrayField: string) => {
    this.getControls(arrayField).push(
      this.fb.control(null, [Validators.required])
    );
  };

  removeControl = (arrayField: string, index: number) => {
    this.getControls(arrayField).removeAt(index);
  };

  showRequiresPassFn = (condition: boolean) => {
    this.showRequiresPass = condition;
  };

  showRequiresVerifyPassFn = (condition: boolean) => {
    this.showRequiresVerifyPass = condition;
  };

  save = () => {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(c => {
        if (!(c instanceof FormGroup) && !(c instanceof FormArray))
          c.markAsTouched();
        else if (c instanceof FormGroup) {
          Object.values(c.controls).forEach(sc => {
            sc.markAsTouched();
          });
        } else if (c instanceof FormArray) {
          Object.values(c.controls).forEach(sc => {
            sc.markAsTouched();
          });
        }
      });
      return;
    }
    console.log(this.form.value);
    this.form.reset();
    this.getControls("pasatiempos").clear();
  };
}
