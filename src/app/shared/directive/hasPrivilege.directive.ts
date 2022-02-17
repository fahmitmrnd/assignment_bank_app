import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { AuthService } from "../service/auth.service";

@Directive({
  selector: '[appHasPrivilege]'
})
export class HasPrivilegeDirective implements OnInit, OnDestroy {
  unsubscribe$: Subject<any> = new Subject();

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      if(!!user && user['role'] === 'admin') {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
