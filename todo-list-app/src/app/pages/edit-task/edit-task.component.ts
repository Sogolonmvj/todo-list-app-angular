import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoListService } from './../../services/todo-list.service';
import { ApiService } from './../../services/api.service';

import { Task, TaskModel } from './../../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskForm?: FormGroup;
  
  taskModelObj: Task = new TaskModel;

  subs: any;

  constructor(private todoListService: TodoListService, private api: ApiService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'title': new FormControl(this.taskForm?.value.title),
      'description': new FormControl(this.taskForm?.value.description)
    });
  }

  // to check here
  updateTask() {
    this.taskModelObj.title = this.taskForm?.value.title;
    this.taskModelObj.description = this.taskForm?.value.description;
    this.subs = this.api.updateTask(this.taskModelObj, this.taskModelObj.id)
    .subscribe(res => {
      alert("Task Updated Successfully!");
      this.subs.unsubcribe();
    })
  }

}
