import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { AuthResData } from "src/app/shared/interface/auth.interface";
import { AuthService } from "src/app/shared/service/auth.service";

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();
  user: AuthResData;
  username: string;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.onAuthenticate();
  }

  onAuthenticate() {
    this._authService.user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) => {
      if(res) {
        this.user = res;
        this.username = res['name'];
      }
    })
  }

  onNavigate(path: string) {
    this._router.navigate(['/user', this.user.id, path])
  }

  onLogout() {
    this._authService.logout();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
