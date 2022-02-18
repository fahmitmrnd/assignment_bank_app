import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResData } from 'src/app/shared/interface/auth.interface';
import { LogService } from 'src/app/shared/service/log.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() userData: AuthResData;
  editMode: boolean = false;
  userId: string;
  userForm: FormGroup;
  constructor(
    private _usrService: UserService,
    private _logService: LogService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.userId = this.userData['id'];
  }

  ngOnChanges(): void {
    this.onResetForm();
  }

  initForm() {
    const {
      name,
      loginId,
      email,
      bankAccountBalance,
      city,
      postcode,
      state,
      country,
      address1,
      address2,
    } = this.userData;
    this.userForm = new FormGroup({
      name: new FormControl(name || null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      idNo: new FormControl(loginId || null, [Validators.required]),
      email: new FormControl(email || null, [Validators.required, Validators.email]),
      bankAccountBalance: new FormControl(bankAccountBalance || null, [Validators.required]),
      city: new FormControl(city || null, [Validators.required]),
      postcode: new FormControl(postcode || null, [Validators.required]),
      state: new FormControl(state || null, [Validators.required]),
      country: new FormControl(country || null, [Validators.required]),
      address1: new FormControl(address1 || null, [Validators.required]),
      address2: new FormControl(address2 || null, [Validators.required]),
    });
    this.userForm.disable();
  }

  onEditMode() {
    this.editMode = true;
    this.userForm.enable();
  }

  onCancel() {
    this.editMode = false;
    this.userForm.disable();
    this.onResetForm();
  }

  onResetForm() {
    this.initForm();
  }

  onSubmit() {
    if(this.userForm.valid) {
      this._usrService.updateUser(this.userForm.value, this.userId)
      .subscribe(
        (user) => {
          this._usrService.onUpdatedUser(user);
          this.editMode = false;
          this._logService.content.next({
            message: 'Updated successfully!!',
            type: 'success'
          })
        },
        () => {
          this.editMode = false;
          this._logService.content.next({
            message: 'Updated failed!!',
            type: 'fail'
          })
        }
      );
    }
  }
}
