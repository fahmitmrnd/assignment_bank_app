import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResData } from "../interface/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<AuthResData | null>(null);

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {}

  login(loginId: string, password: string) {
    const API = `${environment.BASE_URL}api/auth/login`
    return this._http.post<AuthResData>(API, {
      loginId, password
    }).pipe(tap((res) => this.authenticationHandler(res)))
  }

  autoLogin() {
    const user = JSON.parse((localStorage.getItem('userData') as string));
    if(!user) {
      return;
    }

    this.user.next(user);
  }

  logout() {
    this.user.next(null);
    this._router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  private authenticationHandler(userData: AuthResData) {
    this.user.next(userData);
    this._router.navigate(['/']);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
