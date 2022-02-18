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
    const API = `${environment.BASE_URL}${environment.LOGIN_URL}`
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

  filterUserRole(userData: AuthResData) {
    // Due to API response doesn't contain user's role/type
    // I created this method for checking user privilege
    const user = {...userData};
    if(userData['email'].startsWith('admin')) {
      user['role'] = 'admin';
    } else {
      user['role'] = 'user';
    }

    return user;
  }

  logout() {
    this.user.next(null);
    this._router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  authenticationHandler(userData: AuthResData, onNavigate: boolean = true) {
    const user = this.filterUserRole(userData);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    if(onNavigate) {
      this._router.navigate(['/']);
    }
  }
}
