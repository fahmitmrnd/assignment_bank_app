import { NgModule } from "@angular/core";
import { ComponentModule } from "../components/component.module";
import { BaseLayoutComponent } from "./base-layout/base-layout.component";

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [ComponentModule],
  exports: [BaseLayoutComponent]
})
export class LayoutModule {}
