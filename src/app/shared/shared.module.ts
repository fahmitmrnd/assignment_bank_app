import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DropdownDirective } from './directive/dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DropdownDirective],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [CommonModule, RouterModule, MatIconModule, DropdownDirective],
})
export class SharedModule {}
