import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SpotifyService } from "src/app/core/services/spotify.service";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styles: []
})
export class AlbumComponent implements OnInit {
  token: string;

  id: string;
  loading: boolean;
  album: any;

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
          this.getAlbum();
        }
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loading = false;
        this.error = true;
      }
    );
  };

  getAlbum = (): void => {
    this.spotifyService.getAlbum(this.token, this.id).subscribe(
      album => {
        this.loading = false;

        this.album = album;
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loading = false;
        this.error = true;
      }
    );
  };
}
