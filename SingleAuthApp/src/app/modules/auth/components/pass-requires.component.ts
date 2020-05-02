import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-pass-requires",
  templateUrl: "./pass-requires.component.html",
  styleUrls: ["./pass-requires.component.css"]
})
export class PassRequiresComponent implements OnInit {
  @Input() control: FormControl;
  @Input() show: boolean;

  constructor() {}

  ngOnInit(): void {}

  validate = (validate: string) => {
    if (this.control.value) {
      switch (validate) {
        case "eight-characters":
          return /(.{8,})/.test(this.control.value);
        case "lowercase":
          return /(?=.*[a-z])/.test(this.control.value);
        case "uppercase":
          return /(?=.*[A-Z])/.test(this.control.value);
        case "number":
          return /(?=.*[0-9])/.test(this.control.value);
        case "special-character":
          return /(?=.*[$@$!%*?&])/.test(this.control.value);
        default:
          return true;
      }
    } else return false;
  };
}
