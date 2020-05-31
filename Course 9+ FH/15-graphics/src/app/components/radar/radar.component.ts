import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.component.html",
  styleUrls: ["./radar.component.css"],
})
export class RadarComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions;
  public radarChartLabels: Label[];

  public radarChartData: ChartDataSets[];
  public radarChartType: ChartType;

  constructor() {}

  ngOnInit(): void {
    this.radarChartOptions = {
      responsive: true,
    };

    this.radarChartLabels = [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ];

    this.radarChartData = [
      { data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
      { data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" },
    ];

    this.radarChartType = "radar";
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
