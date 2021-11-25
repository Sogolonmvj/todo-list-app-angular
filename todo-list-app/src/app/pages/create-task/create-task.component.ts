import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoListService } from './../../services/todo-list.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm?: FormGroup
  counter?: Number

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(null),
      'description': new FormControl(null)
    });
  }

  onSubmit() {
    let id = this.taskForm?.controls['id'].value;
    let title = this.taskForm?.controls['title'].value;
    let description = this.taskForm?.controls['description'].value;

    console.log(id, title, description);
  }

}

// id: '1',
    //       title: "Assistir à aula do curso Santander Coders",
    //       description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
    //       dueDate: new Date(),
    //       priority: TaskPriority.Medium,
    //       labels: [],
    //       done: false,