import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { Channel } from "../models/channel.model";
import { Observable } from "rxjs";
import { Video } from "../models/video.model";

interface DataResponse {
  videos: Video[];
  pageToken: string;
}

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  key: string;
  url: string;

  constructor(private http: HttpClient) {
    this.key = environment.youtube.key;
    this.url = environment.youtube.url;
  }

  findChannelInfo = (id: string): Observable<Channel> => {
    let params = new HttpParams()
      .set("part", "snippet")
      .set("id", id)
      .set("key", this.key);

    return this.http.get(`${this.url}/channels`, { params }).pipe(
      map((response) => {
        let data = response["items"][0];

        let image;
        if (data["snippet"].thumbnails.medium)
          image = data["snippet"].thumbnails.medium.url;
        else image = "assets/images/no-image.png";

        return new Channel(
          data["id"],
          data["snippet"].title,
          data["snippet"].description,
          image
        );
      })
    );
  };

  findChannelUploadListId = (id: string): Observable<string> => {
    let params = new HttpParams()
      .set("part", "contentDetails")
      .set("id", id)
      .set("key", this.key);

    return this.http
      .get(`${this.url}/channels`, { params })
      .pipe(
        map(
          (response) =>
            response["items"][0].contentDetails.relatedPlaylists.uploads
        )
      );
  };

  findChannelUploads = (
    id: string,
    pageToken: string = ""
  ): Observable<DataResponse> => {
    let params = new HttpParams()
      .set("part", "snippet")
      .set("playlistId", id)
      .set("maxResults", "9")
      .set("key", this.key)
      .set("pageToken", pageToken);

    return this.http.get(`${this.url}/playlistItems`, { params }).pipe(
      map((response) => {
        return {
          videos: response["items"].map((item) => {
            let image;
            if (item["snippet"].thumbnails.medium)
              image = item["snippet"].thumbnails.medium.url;
            else image = "assets/images/no-image.png";

            return new Video(
              item["snippet"].resourceId.videoId,
              item["snippet"].title,
              item["snippet"].description,
              new Date(item["snippet"].publishedAt),
              image
            );
          }),
          pageToken: response["nextPageToken"],
        };
      })
    );
  };
}
