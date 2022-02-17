import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "../service/auth.service";

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.user
    .subscribe((user) => {
      if(!!user) {
        this.vcRef.createEmbeddedView(this.templateRef);
      } else {
        this.vcRef.clear();
      }
    })
  }
}
