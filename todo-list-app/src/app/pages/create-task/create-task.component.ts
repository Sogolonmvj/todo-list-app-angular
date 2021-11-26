import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoListService } from './../../services/todo-list.service';
import { ApiService } from './../../services/api.service';

import { Task, TaskModel } from './../../models/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm?: FormGroup;
  
  taskModelObj : Task = new TaskModel;

  sub: any;

  constructor(private todoListService: TodoListService, private api: ApiService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'title': new FormControl(null),
      'description': new FormControl(null)
    });
  }

  onSubmit() {
    this.taskModelObj.title = this.taskForm?.value.title;
    this.taskModelObj.description = this.taskForm?.value.description;

    this.sub = this.api.postTask(this.taskModelObj).subscribe(res => {
      console.log(res);
      alert('Task Added Successfully!');
      this.taskForm?.reset();
      this.sub.unsubscribe();
    })
  }

  // onSubmit() {
  //   let title = this.taskForm?.controls['title'].value;
  //   let description = this.taskForm?.controls['description'].value;

  //   console.log(title, description);
  // }

}

// id: '1',
    //       title: "Assistir à aula do curso Santander Coders",
    //       description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
    //       dueDate: new Date(),
    //       priority: TaskPriority.Medium,
    //       labels: [],
    //       done: false,