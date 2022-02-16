import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DropdownDirective } from './directive/dropdown.directive';
import { CommonModule } from '@angular/common';
import { TitleFilterPipe } from './pipe/title-filter.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective,
    TitleFilterPipe,
    TruncatePipe
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
    TitleFilterPipe,
    TruncatePipe,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
