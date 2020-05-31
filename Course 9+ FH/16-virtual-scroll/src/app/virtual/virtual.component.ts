import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "app-virtual",
  templateUrl: "./virtual.component.html",
  styleUrls: ["./virtual.component.css"],
})
export class VirtualComponent implements OnInit {
  persons: any[];

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor() {}

  ngOnInit(): void {
    this.persons = Array(500).fill(0);
  }

  goToEnd = () => {
    this.viewport.scrollToIndex(this.persons.length);
  };

  goToMid = () => {
    this.viewport.scrollToIndex(this.persons.length / 2);
  };

  goToStart = () => {
    this.viewport.scrollToIndex(0);
  };
}
