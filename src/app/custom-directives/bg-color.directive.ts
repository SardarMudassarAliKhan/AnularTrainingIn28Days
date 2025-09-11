import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private el: ElementRef) { }

  //Code logic will be added later
  // This directive will change the background color of the host element
  // based on the input color value.
  @Input() set appBgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private resetHighlight() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
