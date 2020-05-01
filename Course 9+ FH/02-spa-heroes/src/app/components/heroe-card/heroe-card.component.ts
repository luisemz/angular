import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Heroe } from "src/app/interfaces/heroe";

@Component({
  selector: "app-heroe-card",
  templateUrl: "./heroe-card.component.html",
  styles: []
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  showHeroe = (): void => {
    this._router.navigate(["/heroe", this.heroe.id]);
    // this.heroeSelected.emit(this.index);
  };
}
