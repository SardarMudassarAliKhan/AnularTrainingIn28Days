import { Component } from '@angular/core';
import { ParentComponentComponent } from './Day7ViewChildVariable/parent-component/parent-component.component';
import { BgColorDirective } from './custom-directives/bg-color.directive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from "./Day10ReactiveFormsInAngular/reactive-forms/reactive-forms.component";

@Component({
  selector: 'app-root',
  imports: [ParentComponentComponent, FormsModule, ReactiveFormsComponent],
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
