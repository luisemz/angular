import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { User } from "src/app/shared/interfaces/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url: string;
  private userToken: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendConfig.baseUrl}/auth`;
  }

  // SAVE USER TOKEN
  private saveToken = (token: string) => {
    this.userToken = token;
    localStorage.setItem("token", token);
  };

  // READ USER TOKEN
  private readToken = () => {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = null;
    }
    return this.userToken;
  };

  // CREATE USER SESSION
  private createSession = (token: string) => {
    this.http
      .post(
        `${this.url}/session`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .subscribe();
  };

  // DELETE USER SESSION
  private deleteSession = (token: string) => {
    this.http
      .delete(`${this.url}/session`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .subscribe();
  };

  // GET USER TOKEN
  token = () => {
    return this.readToken();
  };

  // VERIFY USER AUTHENTICATE
  isAuthneticated = (): boolean => {
    const token = this.readToken();
    if (token) {
      const tokenInfo = JSON.parse(atob(token.split(".")[1])),
        today = new Date(),
        exp = new Date(tokenInfo.exp * 1000);

      if (today < exp) return true;
      else return false;
    } else return false;
  };

  // GET USER PROFILE
  userProfile = () => {
    return new Promise((resolve, reject) => {
      const token = this.readToken();
      if (token) {
        resolve(JSON.parse(atob(token.split(".")[1])));
      } else {
        reject(new Error("Token not found or invalid"));
      }
    });
  };

  register = (data: Partial<User>) => {
    const authRegisterData = { ...data };
    return this.http.post(`${this.url}/register`, authRegisterData, {
      headers: { "Content-Type": "application/json" }
    });
  };

  login = (data: Partial<User>) => {
    const authLoginData = {
      username: data.username,
      password: data.password
    };
    return this.http
      .post(`${this.url}/login`, authLoginData, {
        headers: { "Content-Type": "application/json" }
      })
      .pipe(
        map(response => {
          this.createSession(response["data"]);
          this.saveToken(response["data"]);
          return null;
        })
      );
  };

  logout = () => {
    this.deleteSession(this.readToken());
    localStorage.removeItem("token");
  };
}
