import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthReqData, AuthResData } from "../interface/auth.interface";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  unsubscribe$: Subject<any> = new Subject();
  userSelected: Subject<AuthResData> = new Subject();
  onChangedDetect: Subject<AuthResData | null> = new Subject();

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ){}

  updateUser(reqBody: AuthReqData, userId: string) {
    const API = `${environment.BASE_URL}${environment.USER_URL}${userId}`;
    return this._http.put<AuthResData>(API, reqBody);
  }

  deleteUser(userId: string) {
    const API = `${environment.BASE_URL}${environment.USER_URL}${userId}`;
    return this._http.delete<AuthResData>(API);
  }

  fetchAllUser() {
    const API = `${environment.BASE_URL}${environment.USERS_URL}`;
    return this._http.get(API);
  }

  onRefetchUser(userId: string) {
    const API = `${environment.BASE_URL}${environment.USER_URL}${userId}`;

    this._http.get<AuthResData>(API)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      this._authService.authenticationHandler(user, false);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  createUser(reqObj: any) {
    const API = `${environment.BASE_URL}${environment.USER_URL}`;
    return this._http.post(API, reqObj);
  }
}
