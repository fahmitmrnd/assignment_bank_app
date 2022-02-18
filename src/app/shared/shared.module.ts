import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DropdownDirective } from './directive/dropdown.directive';
import { CommonModule } from '@angular/common';
import { TitleFilterPipe } from './pipe/title-filter.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HasPermissionDirective } from './directive/hasPermission.directive';
import { HasPrivilegeDirective } from './directive/hasPrivilege.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    HasPermissionDirective,
    HasPrivilegeDirective,
    TitleFilterPipe,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    DropdownDirective,
    HasPermissionDirective,
    HasPrivilegeDirective,
    TitleFilterPipe,
    TruncatePipe,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
