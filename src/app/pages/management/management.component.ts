import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { PlaceHolderDirective } from "src/app/shared/directive/placeholder.directive";
import { AuthResData } from "src/app/shared/interface/auth.interface";
import { UserService } from "src/app/shared/service/user.service";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-management-component',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceHolderDirective, { static: false }) placeholder: PlaceHolderDirective;
  unsubscribe$: Subject<any> = new Subject();
  data: any;
  isLoading: boolean = true;
  isCreateMode: boolean = false;

  constructor(
    private _usrService: UserService,
    private _compFactoryRes: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.onGetUsers();
    this.onUserSelect();
    this.onUserChanged();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  onGetUsers() {
    this._usrService.fetchAllUser()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      (users) => {
        this.isLoading = false;
        this.data = this.onUserFilter(users);
        console.log(this.data);

      },
      () => {
        this.isLoading = false;
      }
    )
  }

  onUserFilter(users: any) {
    //Because API res doesn't contain user role, this method will check if email is starts with admin
    //Assume admin will have email: admin@gmail.com
    return users.filter((user: AuthResData) => !user['email'].startsWith('admin'))
  }

  onUserSelect() {
    this._usrService.userSelected
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      this.modal(user);
    })
  }

  onUserChanged() {
    this._usrService.onChangedDetect
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.onGetUsers();
      this.isCreateMode = false;
    })
  }

  onCreateMode() {
    this.isCreateMode = true;
  }

  onCancel() {
    this.isCreateMode = false;
  }

  private modal(userInfo: AuthResData) {
    const modal = this._compFactoryRes.resolveComponentFactory(ModalComponent);
    const placeholderRef = this.placeholder.viewContainerRef;
    placeholderRef.clear();
    const compRef = placeholderRef.createComponent(modal);
    compRef.instance.data = userInfo;
    compRef.instance.close
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      placeholderRef.clear();
    })
  }
}
