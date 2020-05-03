import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private todoService: TodoService
  ) {}

  ngOnInit() {}

  addList = async () => {
    const alert = await this.alertCtrl.create({
      header: "New List",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "List title",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Creater",
          handler: (data) => {
            if (data.title.length === 0) return;
            this.router.navigateByUrl(
              `/tabs/tab1/add/${this.todoService.createList(data.title)}`
            );
          },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  };
}
