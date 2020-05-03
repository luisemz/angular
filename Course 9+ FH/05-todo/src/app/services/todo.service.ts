import { Injectable } from "@angular/core";
import { List } from "../models/list.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  list: List[];

  constructor() {
    this.loadStorage();
  }
  private loadStorage = () => {
    this.list = JSON.parse(localStorage.getItem("data")) || [];
  };

  saveStorage = () => {
    localStorage.setItem("data", JSON.stringify(this.list));
  };

  createList = (title: string) => {
    const newList = new List(title);
    this.list.push(newList);
    this.saveStorage();
    return newList.id;
  };

  deleteList = (list: List) => {
    this.list = this.list.filter((item) => item.id != list.id);
    this.saveStorage();
  };

  loadList = (id: number) => {
    return this.list.find((item) => item.id === id);
  };
}
