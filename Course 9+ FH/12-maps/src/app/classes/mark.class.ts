export class Marker {
  public lat: number;
  public lng: number;
  public title: string;
  public description: string;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
    this.title = "Not Title";
    this.description = "Not Description";
  }
}
