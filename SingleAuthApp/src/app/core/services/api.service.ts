import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private url: string;

  constructor(private authService: AuthService) {
    this.url = `${environment.backendConfig.baseUrl}/api`;
  }

  private getHeaders = () => {};
}
