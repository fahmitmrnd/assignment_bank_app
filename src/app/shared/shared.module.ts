import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DropdownDirective } from './directive/dropdown.directive';
import { CommonModule } from '@angular/common';
import { TitleFilterPipe } from './pipe/title-filter.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    TitleFilterPipe,
    TruncatePipe
  ],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    DropdownDirective,
    TitleFilterPipe,
    TruncatePipe
  ],
})
export class SharedModule {}
