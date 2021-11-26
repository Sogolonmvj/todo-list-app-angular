import { Component, OnInit } from '@angular/core';

import { TodoListService } from './../../services/todo-list.service';

import { Task } from './../../models/task.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoListService],
})
export class TodoListComponent implements OnInit {

  tasksList$?: Observable<Task[]>;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.tasksList$ = this.todoListService.getTasks(); // observable variables should be created with a dollar sign in the end

    this.tasksList$.subscribe({
      next: () => console.log("Accessed the data!"),
      error: (error) => console.log(error),
      complete: () => console.log("Access finished!")
    });

    // this.sub = this.todoListService.getTasks().subscribe((tasksList: Task[]) => {
    //   // this.tasksList = tasksList;
    //   // this.sub.unsubscribe(); // unsubscribe must be done in subscription to avoid memory leak as it stops the listening activity
    // });

  }

  markTaskAsDone(obj: { id: number; value: boolean }) {
    const id = obj.id;
    const done = obj.value;

    console.log(this.tasksList$); // to continue
    // this.tasksList$.done = done;
    // console.log(this.tasksList$[id].done);
  }

  // ngOnDestroy() {
  //   this.sub?.unsubscribe();
  // }

}
