export class ListItem {
  description: string;
  finish: boolean;

  constructor(description: string) {
    this.description = description;
    this.finish = false;
  }
}
