import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-donus",
  templateUrl: "./donus.component.html",
  styleUrls: ["./donus.component.css"],
})
export class DonusComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType;

  constructor() {}

  ngOnInit(): void {
    this.doughnutChartLabels = [
      "Download Sales",
      "In-Store Sales",
      "Mail-Order Sales",
    ];

    this.doughnutChartData = [
      [350, 450, 100],
      [50, 150, 120],
      [250, 130, 70],
    ];

    this.doughnutChartType = "doughnut";
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
