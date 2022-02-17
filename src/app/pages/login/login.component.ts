import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { AuthService } from "src/app/shared/service/auth.service";
import { LogService } from "src/app/shared/service/log.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private _authService: AuthService,
    private _logService: LogService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    this._logService.content.next({
      message: '',
      type: ''
    });
  }

  initForm() {
    this.loginForm = new FormGroup({
      loginId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.isLoading = true;
    const { loginId, password } = this.loginForm.value;
    this._authService.login(loginId, password)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      () => {
      this.isLoading = false;
      },(error) => {
        this.isLoading = false;
        this._logService.content.next({
          message: 'Login failed!',
          type: 'fail'
        })
      }
    )
    this.loginForm.reset();
  }
}
