import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-directives-in-angular',
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './directives-in-angular.component.html',
  styleUrl: './directives-in-angular.component.css'
})
export class DirectivesInAngularComponent {
  isLoggedIn = true;
  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
