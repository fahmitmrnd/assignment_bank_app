import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class PrivilegeGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this._authService.user
    .pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user;
        if(isAuthenticated && user['role'] === 'admin'){
          return true;
        }

        return this._router.createUrlTree(['/']);
      })
    )
  }
}
