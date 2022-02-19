import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LogService } from "src/app/shared/service/log.service";
import { UserService } from "src/app/shared/service/user.service";

@Component({
  selector: 'app-new-user-component',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  constructor(
    private _usrService: UserService,
    private _logService: LogService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newUserForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      idNo: new FormControl(null, Validators.required),
      bankAccountNo: new FormControl(null, Validators.required),
      bankAccountBalance: new FormControl(0, [Validators.required, this.balanceValidator]),
      loginId: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      type: new FormControl(null, Validators.required),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if(this.newUserForm.valid) {
      this._usrService.createUser(
        this.newUserForm.value
      ).subscribe(
        () => {
          this._usrService.onChangedDetect.next(null);
          this._logService.content.next({
            message: 'Create user success!',
            type: 'success'
          })
        },
        () => {
          this._logService.content.next({
            message: 'Create user failed!',
            type: 'fail'
          })
        }
      )
    }
  }

  balanceValidator = (control: FormControl): {[k: string]: boolean} | null => {
    if(Number(control.value) < 1) {
      return {'below': true};
    }

    return null;
  }
}
