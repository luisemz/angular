import { Component, OnInit, ViewChild } from "@angular/core";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";

import { Marker } from "src/app/classes/mark.class";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"],
})
export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  markers: Marker[];
  markerInfo: Marker;

  zoom: number;
  display?: google.maps.LatLngLiteral;
  center: { lat: number; lng: number };
  markerOptions: { draggable: boolean };

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.markers = [];
    this.markerInfo = new Marker(3.42, -76.49);
    if (localStorage.getItem("markers")) {
      this.markers = JSON.parse(localStorage.getItem("markers"));
    } else {
      this.markers.push(this.markerInfo);
    }

    this.center = { lat: this.markerInfo.lat, lng: this.markerInfo.lng };
    this.markerOptions = { draggable: false };
    this.zoom = 5;
  }

  private saveMarkers = () => {
    localStorage.setItem("markers", JSON.stringify(this.markers));
  };

  private showSnackBar = (title: string) => {
    this.snackBar.open(title, "Close", {
      duration: 2000,
    });
  };

  move = (event: google.maps.MouseEvent) => {
    this.display = event.latLng.toJSON();
  };

  addMarker = (event: google.maps.MouseEvent) => {
    this.markers.push(
      new Marker(event.latLng.toJSON().lat, event.latLng.toJSON().lng)
    );

    this.saveMarkers();
    this.showSnackBar("Marker added");
  };

  removeMarker = (marker: Marker) => {
    this.markers = this.markers.filter(
      (m) => m.lat != marker.lat && m.lng != marker.lng
    );

    this.saveMarkers();
    this.showSnackBar("Marker removed");
  };

  editMarker = (marker: Marker) => {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "250px",
      data: { title: marker.title, description: marker.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        marker.title = result.title;
        marker.description = result.description;

        this.saveMarkers();
        this.showSnackBar("Marker updated");
      }
    });
  };

  openInfoWindow = (marker: MapMarker, markerInfo: Marker) => {
    this.markerInfo = markerInfo;
    this.infoWindow.open(marker);
  };
}
