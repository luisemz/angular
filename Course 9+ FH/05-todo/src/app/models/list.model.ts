import { ListItem } from "./list-item.model";

export class List {
  id: number;
  title: string;
  createDate: Date;
  finishDate: Date;
  finish: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.createDate = new Date();
    this.finish = false;
    this.items = [];
  }
}
