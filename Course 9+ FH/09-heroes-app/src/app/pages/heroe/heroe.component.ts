import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { HeroesService } from "src/app/services/heroes.service";

import { HeroeModel } from "src/app/models/heroe.model";

import Swal from "sweetalert2";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.createForm();
    this.getDataForm(this.ar.snapshot.paramMap.get("id"));
  }

  createForm = () => {
    this.form.addControl("id", this.fb.control(null));
    this.form.addControl("name", this.fb.control(null, [Validators.required]));
    this.form.addControl("power", this.fb.control(null));
    this.form.addControl("live", this.fb.control(null));
  };

  getDataForm = (id: string) => {
    if (id === "new") this.heroe = new HeroeModel();
    else
      this.heroesService.getHereo(id).subscribe(
        (heroe: HeroeModel) => {
          if (!heroe) this.router.navigateByUrl("heroes");
          this.heroe = heroe;
          this.heroe.id = id;
        },
        () => {
          this.toast("error", `Error find heroe`);
        }
      );
  };

  getControl = (field: string): FormControl => {
    return <FormControl>this.form.get(field);
  };

  validateFieldValid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).valid;
  };

  validateFieldInvalid = (field: string) => {
    return this.getControl(field).touched && this.getControl(field).invalid;
  };

  saveOrUpdateHeroe = () => {
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      title: "Wait please...",
      showClass: {
        popup: "animated fadeIn fast",
      },
      hideClass: {
        popup: "animated fadeIn fast",
      },
    });
    Swal.showLoading();

    let request: Observable<any>, title: string;

    if (this.heroe.id) {
      request = this.heroesService.updateHeroe(this.heroe);
      title = "update";
    } else {
      request = this.heroesService.createHeroe(this.heroe);
      title = "create";
    }

    request.subscribe(
      () => {
        this.toast("success", `Hereo ${title} successfuly!`);
      },
      () => {
        this.toast("error", `Error ${title} heroe`);
      }
    );
  };

  toast = (
    icon: "success" | "warning" | "error" | "info" | "question",
    title: string
  ) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      width: "350px",
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      showClass: {
        popup: "animated fadeIn fast",
      },
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  };

  save = () => {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    this.saveOrUpdateHeroe();
  };
}
