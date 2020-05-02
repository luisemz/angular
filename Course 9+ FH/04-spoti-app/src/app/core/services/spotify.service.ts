import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  private getQuery = (token: string, query: string) => {
    const headers = new HttpHeaders({
      Authorization: token
    });
    const url = `${environment.spotifyConfig.apiUrl}${query}`;

    return this.http.get(url, { headers });
  };

  getToken = (): Observable<string> => {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http
      .post(
        `${environment.spotifyConfig.authUrl}api/token`,
        `grant_type=client_credentials&client_id=${environment.spotifyConfig.clientId}&client_secret=${environment.spotifyConfig.clientSecret}`,
        { headers }
      )
      .pipe(
        map(response => `${response["token_type"]} ${response["access_token"]}`)
      );
  };

  getNewRealese = (
    token: string,
    offset: number = 0,
    limit: number = 20
  ): Observable<Array<Object>> => {
    return this.getQuery(
      token,
      `browse/new-releases?offset=${offset}&limit=${limit}`
    ).pipe(map(response => response["albums"].items));
  };

  getSearch = (
    token: string,
    query: string,
    type: string,
    offset: number = 0,
    limit: number = 20
  ): Observable<Array<Object>> => {
    return this.getQuery(
      token,
      `search?q=${query}&type=${type}&offset=${offset}&limit=${limit}`
    ).pipe(
      map(response => {
        let data = [];
        if (type == "track") {
          data = response["tracks"].items;
          data = data.map(item => {
            item.images = item.album.images;
            return item;
          });
        } else {
          data = response["artists"].items;
        }
        return data;
      })
    );
  };

  getArtist = (token: string, id: string): Observable<Object> => {
    return this.getQuery(token, `artists/${id}`);
  };

  getTopTracks = (
    token: string,
    id: string,
    countryCode: string
  ): Observable<Array<Object>> => {
    return this.getQuery(
      token,
      `artists/${id}/top-tracks?country=${countryCode}`
    ).pipe(map(response => response["tracks"]));
  };

  getAlbum = (token: string, id: string): Observable<Object> => {
    return this.getQuery(token, `albums/${id}`).pipe(
      map(response => {
        response["tracks"] = response["tracks"].items;
        return response;
      })
    );
  };

  getTrack = (token: string, id: string): Observable<Object> => {
    return this.getQuery(token, `tracks/${id}`);
  };
}
