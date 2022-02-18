import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { AuthResData } from "src/app/shared/interface/auth.interface";
import { AuthService } from "src/app/shared/service/auth.service";
import { LogService } from "src/app/shared/service/log.service";
import { UserService } from "src/app/shared/service/user.service";
import { TransactionService } from "src/app/shared/service/transaction.service";

@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();
  transactionForm: FormGroup;
  user: AuthResData | null;
  isLoading: boolean = false;

  constructor(
    private _authService: AuthService,
    private _logService: LogService,
    private _transactionService: TransactionService,
    private _usrService: UserService,
  ) {}

  ngOnInit(): void {
    this.onAuthenticate();
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  onAuthenticate() {
    this._authService.user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      this.user = user;
    })
  }

  initForm() {
    this.transactionForm = new FormGroup({
      sender: new FormControl(this.user!['bankAccountNo'], [Validators.required]),
      recipient: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, this.balanceValidator]),
    })
  }

  isExceedBalance(val: number) {
    return Number(val) > this.user!['bankAccountBalance'];
  }

  isBelowBalance(val: number) {
    return Number(val) < 1
  }

  balanceValidator = (control: FormControl): {[k: string]: boolean} | null => {
    if(this.isExceedBalance(control.value)) {
      return {'exceed': true};
    }
    if(this.isBelowBalance(control.value)) {
      return {'below': true};
    }

    return null;
  }

  onResetForm() {
    this.transactionForm.reset({
      sender: this.user!['bankAccountBalance']
    });
  }

  onSubmit() {
    const {sender, recipient, amount} = this.transactionForm.value;
    if(this.isExceedBalance(amount)) {
      this.onResetForm();
      return;
    }
    if(this.isBelowBalance(amount)) {
      this.onResetForm();
      return;
    }
    this.isLoading = true;
    this._transactionService
    .createTransaction(sender, recipient, Number(amount))
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      () => {
        this._usrService.onRefetchUser(this.user!['id']);
        this.isLoading = false;
        this.onResetForm();
        this.onPromptMessage('Transaction completed!!', 'success');
      },
      () => {
        this.isLoading = false;
        this.onResetForm();
        this.onPromptMessage('Transaction failed!!', 'fail');
      }
    )
  }

  onPromptMessage(message: string, type: string) {
    this._logService.content.next({
      message: message,
      type: type
    })
  }
}
