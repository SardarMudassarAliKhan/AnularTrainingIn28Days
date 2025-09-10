import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tem-ref-parent-comp',
  imports: [],
  templateUrl: './tem-ref-parent-comp.component.html',
  styleUrl: './tem-ref-parent-comp.component.css'
})
export class TemRefParentCompComponent {

    @ViewChild('inputRef') inputElement!: ElementRef;

     ngAfterViewInit() {
     console.log("Initial value:", this.inputElement.nativeElement.value);
      }

     changeText() {
        this.inputElement.nativeElement.value = 'New Input Value';
     }

}
