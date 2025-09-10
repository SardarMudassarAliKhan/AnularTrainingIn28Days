import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildcomponentComponent } from "./Days5ComponentCommunication/childcomponent/childcomponent.component";
import { DirectivesInAngularComponent } from "./Day6DirectiveInAngualr/directives-in-angular/directives-in-angular.component";
import { TemplateDrivenReferanceComponent } from "./Day6ATemplateDrivenForms/template-driven-referance/template-driven-referance.component";
import { ParentComponentComponent } from './Day7ViewChildVariable/parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnularTrainingIn28Days';
}
