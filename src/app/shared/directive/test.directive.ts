import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective implements OnInit, OnChanges{
  @Input() appTestDirective: any;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('Hello world!');
    // this.renderer.appendChild(div, text);
    console.log(this.appTestDirective);

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

  }

  render(div: any) {
    this.renderer.appendChild(this.elementRef.nativeElement, div);
  }
}
