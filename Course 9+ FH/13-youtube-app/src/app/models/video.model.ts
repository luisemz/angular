export class Video {
  id: string;
  title: string;
  description: string;
  publish: Date;
  image: string;

  constructor(
    id: string,
    title: string,
    description: string,
    publish: Date,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.publish = publish;
    this.image = image;
  }
}
