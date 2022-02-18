import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(
    private _http: HttpClient
  ) {}

  getAllTransactions(userId: string) {
    const API = `${environment.BASE_URL}${environment.TRANSACTIONS_URL}${userId}`;
    return this._http.get(API);
  }

  createTransaction(sender: string, recipient: string, amount: number) {
    const API = `${environment.BASE_URL}${environment.TRANSACTION_URL}`;
    return this._http.post(API, {
      sender,
      recipient,
      amount
    })
  }
}
