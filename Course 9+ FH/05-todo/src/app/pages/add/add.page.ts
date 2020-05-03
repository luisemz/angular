import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { List } from "src/app/models/list.model";
import { TodoService } from "src/app/services/todo.service";
import { ListItem } from "src/app/models/list-item.model";

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  list: List;
  nameItem: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.list = this.todoService.loadList(
      parseInt(this.activedRoute.snapshot.paramMap.get("id"))
    );
    this.nameItem = "";
  }

  addItem = () => {
    if (this.nameItem.length === 0) return;
    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = "";
    this.todoService.saveStorage();
  };

  changeItem = () => {
    const pending = this.list.items.filter((item) => !item.finish).length;
    if (pending === 0) {
      this.list.finishDate = new Date();
      this.list.finish = true;
    } else {
      this.list.finishDate = null;
      this.list.finish = false;
    }
    this.todoService.saveStorage();
  };

  deleteItem = (index: number) => {
    this.list.items.splice(index, 1);
    this.todoService.saveStorage();
  };
}
