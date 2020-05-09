import { Component, OnInit } from "@angular/core";

import { HeroesService } from "src/app/services/heroes.service";
import { HeroeModel } from "src/app/models/heroe.model";

import Swal from "sweetalert2";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[];
  loading: boolean;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.heroesService.getHeroes().subscribe(
      (response) => {
        this.loading = false;
        this.heroes = response;
      },
      () => {
        this.loading = false;
        this.toast("error", `Error get all heroes`);
      }
    );
  }

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

  deleteHeroe = (heroe: HeroeModel, index: number) => {
    Swal.fire({
      title: "¿Are you sure?",
      text: `Are you sure to delete heroe: ${heroe.name}`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((response) => {
      if (response.value) {
        this.heroesService.deleteHeroe(heroe.id).subscribe(
          () => {
            this.heroes.splice(index, 1);
          },
          () => {
            this.toast("error", `Error delete heroe`);
          }
        );
      }
    });
  };
}
