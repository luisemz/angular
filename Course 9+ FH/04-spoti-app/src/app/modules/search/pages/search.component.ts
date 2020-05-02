import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/core/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  token: string;
  search: string;
  searchType: string;
  searchResult: any[];
  loading: boolean;

  error: boolean;
  errorMessage: string;

  notFound: boolean;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.search = "";
    this.loading = false;
    this.searchType = "track";
    this.searchResult = [];

    this.error = false;
    this.errorMessage = "";

    this.notFound = false;

    this.getToken();
  }

  getToken = (): void => {
    this.spotifyService.getToken().subscribe(
      token => {
        this.token = token;
        this.error = false;
      },
      (error: Object) => {
        this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
        this.error = true;
      }
    );
  };

  searchTrackOrArtist = (event: Event): void => {
    event.preventDefault();
    this.loading = true;
    this.searchResult = [];
    if (this.search == "") {
      this.loading = false;
      return;
    }
    this.spotifyService
      .getSearch(this.token, this.search, this.searchType, 0, 18)
      .subscribe(
        searchResult => {
          this.notFound = false;
          this.searchResult = searchResult;
          if (!searchResult.length) this.notFound = true;
          this.loading = false;
          this.error = false;
        },
        (error: Error) => {
          this.errorMessage = `${error["message"]} - ${error["error"].error_description}`;
          this.loading = false;
          this.error = true;
        }
      );
  };
}
