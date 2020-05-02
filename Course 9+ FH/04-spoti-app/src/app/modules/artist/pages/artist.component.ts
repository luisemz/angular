import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { SpotifyService } from "src/app/core/services/spotify.service";
import { CountryService } from "src/app/core/services/country.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: []
})
export class ArtistComponent implements OnInit {
  token: string;
  loadingArtist: boolean;
  loadingTracks: boolean;

  id: string;
  countryCode: string;
  search: string;

  artist: any;
  artistTopTracks: any[];

  error: boolean;
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.artist = {};
    this.artistTopTracks = [];
    this.search = "Colombia";
    this.countryCode = "CO";
    this.loadingArtist = true;
    this.loadingTracks = true;

    this.activatedRoute.params.subscribe(params => {
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
          this.getArtist();
          this.getTopTracks();
        }
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loadingArtist = false;
        this.loadingTracks = false;
        this.error = true;
      }
    );
  };

  getArtist = (): void => {
    this.spotifyService.getArtist(this.token, this.id).subscribe(
      artist => {
        this.artist = artist;
        this.loadingArtist = false;
        this.error = false;
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loadingArtist = false;
        this.error = true;
      }
    );
  };

  getTopTracks = (): void => {
    this.spotifyService
      .getTopTracks(this.token, this.id, this.countryCode)
      .subscribe(
        topTracks => {
          this.artistTopTracks = topTracks;
          this.loadingTracks = false;
          this.error = false;
        },
        (error: Object) => {
          this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
          this.loadingTracks = false;
          this.error = true;
        }
      );
  };

  searchCountry = (event: Event): void => {
    event.preventDefault();
    this.artistTopTracks = [];
    this.loadingTracks = true;
    this.countryService.getCountryCode(this.search).subscribe(
      countryCode => {
        this.countryCode = countryCode;
        this.getTopTracks();
        this.error = false;
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].message}`;
        this.loadingTracks = false;
        this.error = true;
      }
    );
  };
}
