import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

import { Task, TaskModel } from './../../../models/task.model';

import { ApiService } from './../../../services/api.service';
import { TodoListService } from './../../../services/todo-list.service';

const URL = "http://localhost:3000/posts";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  providers: [TodoListService],
})
export class TodoListItemComponent implements OnInit {
  @Input('taskObj') task?: Task; // prop that comes from parent
  @Input() taskId?: number; // prop that comes from parent
  @Output() warnTaskWasDone: EventEmitter<any> = new EventEmitter(); // prop that goes from child to parent
  @ViewChild('checkboxInput') checkboxInput?: ElementRef; // reference to this element

  tasksList: any;
  sub: any;
  subs: any;
  taskData: any;
  subscription: any;
  taskForm?: FormGroup;
  editForm?: FormGroup;
  taskModelObj: Task = new TaskModel;

  constructor(private api: ApiService, private todoListService: TodoListService, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getColor(): string {
    switch(this.taskModelObj?.done) {
      case true:
        return "#f5e769"; 
      case false:
        return "#f5b869";
      default:
        return "white";
    }
  }

  getClass(): string {
    switch(this.taskModelObj?.done) {
      case true:
        return "bg-yellow";
      case false:
        return "bg-orange";
      default:
        return "";
    }
  }

  markAsDone(event: MatCheckboxChange) {
    console.log(this.checkboxInput);
    this.warnTaskWasDone.emit({ id: this.taskId, value: event.checked });

    this.taskModelObj.done = event.checked;
    this.subs = this.api.updateTask(this.taskModelObj, (this.taskModelObj.id+1)).subscribe(res => {
      console.log(res);
      this.subs.unsubscribe();
    })
    console.log(this.taskModelObj.done);
  }

  getTasks() {
    this.subscription = this.api.getTask()
    .subscribe(res => {
      this.tasksList = res;
      this.subscription.unsubscribe();
    })
  };

  deleteTask(task: any) {
    this.sub = this.api.deleteTask(task.id)
    .subscribe(res => {
      alert("Task Deleted!");
      this.getTasks();
      this.sub.unsubscribe();
    })
  };

  // to check here
  onEdit(task: any) {
    this.taskModelObj.id = task.id;

    console.log(task.id, task.title, task.description);

    localStorage.setItem('taskObj', JSON.stringify(task));

    // this.todoListService.getTasks();

    // this.editTaskComponent.editForm?.controls['editTitle'].setValue(task.title);
    // this.editTaskComponent.editForm?.controls['editDescription'].setValue(task.description);

    // console.log(this.editTaskComponent.editForm?.controls['editTitle'].value, this.editTaskComponent.editForm?.controls['editDescription'].value);
  }

}
