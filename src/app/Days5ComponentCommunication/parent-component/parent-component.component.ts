import { Component, Output } from '@angular/core';
import { ChildcomponentComponent } from "../childcomponent/childcomponent.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent-component',
  imports: [ChildcomponentComponent,NgFor],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  //Initilize array with dummy data 
  ParentObjectArray = [
    { "id": 1, "name": "John", "age": 25 },
    { "id": 2, "name": "Jane", "age": 30 },
    { "id": 3, "name": "Doe", "age": 22 }
  ];

  ChilddataFromParent: any[] = [];
  ChilddataFromParent2: any[] = [];

  //Custom Message 
  MyMessageForMyChild: string = "Hello Child Component, This is Parent Component";
  MyMessageForMyChild2: string = "Hello Child Component, This is Parent Component - 2"; 

  //Method to send data to child component
  sendDataToChild() {
    return this.ParentObjectArray;
  }

  receiveDataFromChild(event: any[]) {
    debugger;
    console.log("Data received from child component" + JSON.stringify(event));
    this.ChilddataFromParent = event;
    this.ChilddataFromParent2 = event;
  }

}
