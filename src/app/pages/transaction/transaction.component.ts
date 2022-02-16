import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-transaction-component',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactionForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.transactionForm = new FormGroup({
      sender: new FormControl({
        value: 'username',
        disabled: true
      }, [Validators.required]),
      recipient: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
    })
  }

  validateBalance(control: FormControl): {[k: string]: boolean} | null {
    return null;
  }

  onSubmit() {
    console.log(this.transactionForm);

  }
}
