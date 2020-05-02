import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {
  @Input() items: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showItem = item => {
    if (item.type === "artist")
      this.router.navigate(["/content/artist", item.id]);
    else if (item.type === "album")
      this.router.navigate(["/content/album", item.id]);
    else if (item.type === "track")
      this.router.navigate(["/content/track", item.id]);
    else return;
  };
}
