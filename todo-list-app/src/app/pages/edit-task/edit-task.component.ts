import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoListService } from './../../services/todo-list.service';
import { ApiService } from './../../services/api.service';

import { Task, TaskModel } from './../../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  editForm?: FormGroup;
  
  taskModelObj: Task = new TaskModel;

  subs: any;

  obj: Task = new TaskModel;

  constructor(private todoListService: TodoListService, private api: ApiService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'editTitle': new FormControl(this.taskModelObj.title),
      'editDescription': new FormControl(this.taskModelObj.description)
    });
  }

  // to check here
  updateTask() {
    this.taskModelObj.title = this.editForm?.value.editTitle;
    this.taskModelObj.description = this.editForm?.value.editDescription;
    this.subs = this.api.updateTask(this.taskModelObj, this.taskModelObj.id)
    .subscribe(res => {
      alert("Task Updated Successfully!");
      this.subs.unsubcribe();
    })
  }

}
