import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SpotifyService } from "src/app/core/services/spotify.service";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styles: []
})
export class TrackComponent implements OnInit {
  id: string;

  token: string;
  loading: boolean;
  track: any;

  error: boolean;
  errorMessage: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.activedRoute.params.subscribe(params => {
      this.id = params["id"];

      this.getToken(false);
    });
  }

  getToken = (refresh: boolean): void => {
    this.spotifyService.getToken().subscribe(
      (token: any) => {
        this.token = token;
        this.error = false;

        if (!refresh) {
          this.getTrack();
        }
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loading = false;
        this.error = true;
      }
    );
  };

  getTrack = (): void => {
    this.spotifyService.getTrack(this.token, this.id).subscribe(
      track => {
        this.loading = false;

        this.track = track;
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loading = false;
        this.error = true;
      }
    );
  };
}
