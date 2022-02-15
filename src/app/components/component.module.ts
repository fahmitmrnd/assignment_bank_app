import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ButtonComponent } from "./button/button.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, ButtonComponent],
  imports: [SharedModule],
  exports: [NavbarComponent, ButtonComponent]
})
export class ComponentModule {}
