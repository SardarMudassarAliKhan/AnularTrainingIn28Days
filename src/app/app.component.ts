import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponentComponent } from "./Days5ComponentCommunication/parent-component/parent-component.component";
import { ChildcomponentComponent } from "./Days5ComponentCommunication/childcomponent/childcomponent.component";

@Component({
  selector: 'app-root',
  imports: [ ParentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnularTrainingIn28Days';
}
