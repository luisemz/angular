import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  buttonName: string = "Show";
  showPass: boolean = false;

  name: string = "Captain America";
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  percentage: number = 0.16542;
  salary: number = 5432.5;

  heroe = {
    name: "Logan",
    key: "Wolverine",
    age: 30,
    address: {
      street: "First",
      house: 20
    }
  };

  promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Data come");
    }, 4500);
  });

  date: Date = new Date();
  language: string = "es";

  name2: string = "lUIs eDuarDo mosQUeRa zApAtA";
  videoUrl: string = "https://www.youtube.com/embed/O4f58BU_Hbs";

  showPassword = () => {
    this.showPass = !this.showPass;
    if (this.showPass) this.buttonName = "Hide";
    else this.buttonName = "Show";
  };
}
