import { Component, ContentChild, contentChild, ElementRef, ViewChild } from '@angular/core';
import { TemRefViewChildComponent } from "../tem-ref-view-child/tem-ref-view-child.component";

@Component({
  selector: 'app-template-driven-referance',
  imports: [TemRefViewChildComponent],
  templateUrl: './template-driven-referance.component.html',
  styleUrl: './template-driven-referance.component.css'
})
export class TemplateDrivenReferanceComponent {

  @ContentChild('projectedPara') projectedElement!: ElementRef;
  @ViewChild(TemRefViewChildComponent) childComponent!: TemRefViewChildComponent;
  logMessage(Massage: string) {
    console.log(Massage);
    alert(Massage);
  }

}
