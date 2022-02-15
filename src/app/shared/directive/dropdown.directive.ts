import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef
  ) {}

  @HostBinding('class.active') isToggle = false;
  @HostListener('document:click', ['$event']) onToggle(event: Event) {
    this.isToggle = this.elementRef.nativeElement.contains(event.target) ? !this.isToggle : false;
  }
}
