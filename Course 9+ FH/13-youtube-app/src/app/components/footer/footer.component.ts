import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  scrolled = 0;

  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const numb = window.scrollY;
    if (numb >= 50) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
  }

  scrollTop = () => {
    window.scroll(0, 0);
  };
}
