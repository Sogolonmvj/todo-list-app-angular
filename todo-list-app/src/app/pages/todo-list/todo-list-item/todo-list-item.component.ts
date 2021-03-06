import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { Task } from './../../../models/task.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input('taskObj') task?: Task; // prop that comes from parent
  @Input() taskId?: number; // prop that comes from parent
  @Output() warnTaskWasDone: EventEmitter<any> = new EventEmitter(); // prop that goes from child to parent
  @ViewChild('checkboxInput') checkboxInput?: ElementRef; // reference to this element

  tasksList: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  getColor(): string {
    switch(this.task?.done) {
      case true:
        return "#f5e769"; 
      case false:
        return "#f5b869";
      default:
        return "white";
    }
  }

  getClass(): string {
    switch(this.task?.done) {
      case true:
        return "bg-yellow";
      case false:
        return "bg-orange";
      default:
        return "";
    }
  }

  markAsDone(event: MatCheckboxChange) {
    // console.log(this.checkboxInput);
    this.warnTaskWasDone.emit({ id: this.taskId, value: event.checked });
  }

}
