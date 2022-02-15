import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { DropdownDirective } from "./directive/dropdown.directive";

@NgModule({
  declarations: [DropdownDirective],
  imports: [RouterModule, MatIconModule],
  exports: [RouterModule, MatIconModule, DropdownDirective]
})
export class SharedModule {}
