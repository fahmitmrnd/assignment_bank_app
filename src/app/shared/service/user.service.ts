import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthReqData, AuthResData } from "../interface/auth.interface";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ){}

  updateUser(reqBody: AuthReqData, userId: string) {
    const API = `${environment.BASE_URL}${environment.USER_URL}${userId}`;
    return this._http.put<AuthResData>(API, reqBody)
  }

  onUpdatedUser(user: AuthResData) {
    this._authService.authenticationHandler(user, false);
  }
}
