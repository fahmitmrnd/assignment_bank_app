import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from './button/button.component';
import { ItemDetailComponent } from './list-items/item-detail/item-detail.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { LogComponent } from './log/log.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    UserFormComponent,
    ListItemsComponent,
    ItemDetailComponent,
    NotFoundComponent,
    SpinnerComponent,
    LogComponent,
    ModalComponent
  ],
  imports: [SharedModule],
  exports: [
    NavbarComponent,
    ButtonComponent,
    UserFormComponent,
    ListItemsComponent,
    NotFoundComponent,
    SpinnerComponent,
    LogComponent,
    ModalComponent
  ],
})
export class ComponentModule {}
