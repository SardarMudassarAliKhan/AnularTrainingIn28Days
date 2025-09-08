import { NgFor } from '@angular/common';
import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  imports: [NgFor],
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.css'
})
export class ChildcomponentComponent implements OnInit {
  
  //Recieve data from parent component
  @Input() ArraydataFromParent: any[] = [];
   ArraydataToParent = [
    { "id": 1, "Child of Mudassar 1": "John", "age": 25 },
    { "id": 2, "Child of Mudassar 2": "Jane", "age": 30 },
    { "id": 3, "Child of Mudassar 3": "Doe", "age": 22 }
  ];

   ArraydataToParent2 = [
    { "id": 1, "Child of Mudassar 1": "John", "age": 25 },
    { "id": 2, "Child of Mudassar 2": "Jane", "age": 30 },
    { "id": 3, "Child of Mudassar 3": "Doe", "age": 22 }
  ];

  @Output() messageEvent: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input() parentMessage: string = "";
  @Input() parentMessage2: string = ""; 

  //Send Array data to parent component
  sendDataToParent() {
    this.messageEvent.emit(this.ArraydataToParent);
    this.messageEvent.emit(this.ArraydataToParent2);
  }

  ngOnInit(): void {
  }

}