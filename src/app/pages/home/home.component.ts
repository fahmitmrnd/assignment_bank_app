import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { AuthResData } from "src/app/shared/interface/auth.interface";
import { AuthService } from "src/app/shared/service/auth.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();
  isAuthenticated: boolean = false;
  user: AuthResData;

  constructor(
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.onAuthenticate();
  }

  onAuthenticate() {
    this._authService.user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) => {
      this.isAuthenticated = false;
      if(res) {
        this.isAuthenticated = true;
        this.user = res;
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
