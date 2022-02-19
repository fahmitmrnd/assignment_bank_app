import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { AuthResData } from "src/app/shared/interface/auth.interface";
import { AuthService } from "src/app/shared/service/auth.service";
import { UserService } from "src/app/shared/service/user.service";

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();

  user: AuthResData;
  constructor(
    private _authService: AuthService,
    private _usrService: UserService
  ) {}

  ngOnInit(): void {
    this.onGetUser();
    this.onUserChanged();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  onUserChanged() {
    this._usrService.onChangedDetect
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      this._authService.authenticationHandler(user!, false);
      this.onGetUser();
    })
  }

  onGetUser() {
    this._authService.user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      if(user) {
        this.user = user;
      }
    })
  }
}
