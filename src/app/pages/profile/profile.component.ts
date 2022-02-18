import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { AuthResData } from "src/app/shared/interface/auth.interface";
import { AuthService } from "src/app/shared/service/auth.service";

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();

  user: AuthResData;
  constructor(
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.onGetUser();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
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
