import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/core/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  token: string;
  offset: number;
  limit: number;
  loading: boolean;

  error: boolean;
  errorMessage: string;

  newRealese: any[];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.offset = 0;
    this.limit = 18;
    this.newRealese = [];
    this.loading = true;

    this.error = false;
    this.errorMessage = "";

    this.getToken(false);
  }

  getToken = (refresh: boolean): void => {
    this.spotifyService.getToken().subscribe(
      token => {
        this.token = token;
        this.error = false;

        if (!refresh) this.getNewRealese();
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.loading = false;
        this.error = true;
      }
    );
  };

  getNewRealese = (): void => {
    this.spotifyService
      .getNewRealese(this.token, this.offset, this.limit)
      .subscribe(
        newRealese => {
          this.newRealese = newRealese;
          this.loading = false;
          this.error = false;
        },
        (error: Object) => {
          this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
          this.loading = false;
          this.error = true;
        }
      );
  };
}
