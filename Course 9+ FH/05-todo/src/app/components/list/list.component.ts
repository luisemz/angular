import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { AlertController, IonList } from "@ionic/angular";
import { Router } from "@angular/router";

import { List } from "src/app/models/list.model";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @ViewChild(IonList, { static: false }) ionList: IonList;

  @Input() tab: number;

  list: List[];

  constructor(
    private alertCtrl: AlertController,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.list = this.todoService.list;
  }

  selectList = (list: List) => {
    if (this.tab === 1) this.router.navigate(["/tabs/tab1/add", list.id]);
    else if (this.tab === 2) this.router.navigate(["/tabs/tab2/add", list.id]);
  };

  updateList = async (list: List) => {
    const alert = await this.alertCtrl.create({
      header: "Edit List",
      inputs: [
        {
          name: "title",
          type: "text",
          value: list.title,
          placeholder: "List title",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.ionList.closeSlidingItems();
          },
        },
        {
          text: "Update",
          handler: (data) => {
            if (data.title.length === 0) return;
            list.title = data.title;
            this.todoService.saveStorage();
            this.ionList.closeSlidingItems();
          },
        },
      ],
      backdropDismiss: false,
    });
    alert.present();
  };

  deleteList = (list: List) => {
    this.todoService.deleteList(list);
    this.list = this.todoService.list;
  };
}
