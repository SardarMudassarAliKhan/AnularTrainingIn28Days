import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildcomponentComponent } from "./Days5ComponentCommunication/childcomponent/childcomponent.component";
import { DirectivesInAngularComponent } from "./Day6DirectiveInAngualr/directives-in-angular/directives-in-angular.component";
import { TemplateDrivenReferanceComponent } from "./Day6ATemplateDrivenForms/template-driven-referance/template-driven-referance.component";
import { ParentComponentComponent } from './Day7ViewChildVariable/parent-component/parent-component.component';
import { BgColorDirective } from './custom-directives/bg-color.directive';
import { FormsModule } from '@angular/forms';
import { NgComponentOutlet } from "../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-root',
  imports: [ParentComponentComponent, BgColorDirective, FormsModule, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NGCORE Application';

  onSubmit(formValue: any) {
    console.log('Form Submitted!', formValue);
    alert('Form Submitted! ' + JSON.stringify(formValue) );
  }
}
