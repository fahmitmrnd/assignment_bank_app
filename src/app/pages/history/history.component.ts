import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { of, Subject, switchMap, takeUntil, tap } from "rxjs";
import { TransactionService } from "src/app/shared/service/transaction.service";

@Component({
  selector: 'app-history-component',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  unsubscribe$: Subject<any> = new Subject();
  data: any;

  constructor(
    private _transactionService: TransactionService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params
    .pipe(
      switchMap((param: Params) => {
        const { id } = param;
        return this.onGetAllTrans(id);
    }))
    .subscribe();
  }

  onGetAllTrans(userId: string) {
    return this._transactionService
    .getAllTransactions(userId)
    .pipe(
      takeUntil(this.unsubscribe$),
      tap((data) => this.data = data)
    )
  }
}
