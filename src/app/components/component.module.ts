import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from './button/button.component';
import { ItemDetailComponent } from './list-items/item-detail/item-detail.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    UserFormComponent,
    ListItemsComponent,
    ItemDetailComponent
  ],
  imports: [SharedModule],
  exports: [
    NavbarComponent,
    ButtonComponent,
    UserFormComponent,
    ListItemsComponent,
  ],
})
export class ComponentModule {}
