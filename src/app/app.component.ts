import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponentComponent } from "./Days5ComponentCommunication/parent-component/parent-component.component";
import { ChildcomponentComponent } from "./Days5ComponentCommunication/childcomponent/childcomponent.component";
import { DirectivesInAngularComponent } from "./Day6DirectiveInAngualr/directives-in-angular/directives-in-angular.component";
import { TemplateDrivenReferanceComponent } from "./Day6ATemplateDrivenForms/template-driven-referance/template-driven-referance.component";

@Component({
  selector: 'app-root',
  imports: [TemplateDrivenReferanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnularTrainingIn28Days';
}
