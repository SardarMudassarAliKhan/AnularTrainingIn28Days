import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-component-Day7ViewChildVariable',
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  @ViewChild('childComp') childComponentRef!: any;
  @ViewChild('childComp') child!: ChildComponentComponent;

  invokeChildMethod() {
    this.childComponentRef.sayHello();
  }

  invokeChildMethod2() {
    this.child.sayHello();
  }

}
