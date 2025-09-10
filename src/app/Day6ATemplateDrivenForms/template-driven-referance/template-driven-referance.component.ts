import { Component, ContentChild, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-driven-referance',
  imports: [],
  templateUrl: './template-driven-referance.component.html',
  styleUrl: './template-driven-referance.component.css'
})
export class TemplateDrivenReferanceComponent {

  @ContentChild('projectedPara') projectedElement!: ElementRef;
  logMessage(Massage: string) {
    console.log(Massage);
    alert(Massage);
  }

}
