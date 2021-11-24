import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task, TaskPriority } from './../models/task.model';

import { delay, of, pipe } from 'rxjs';
import { Observable } from 'rxjs';

//  const URL = "http://madsti.com.br:9090/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) {
    console.log("Serviço todo-list instanciado!");
  }

  getTasks() {
    // const options = {
    //   headers: {
    //     Authorization: "Basadmin: password"
    //   }
    // };
    // return this.http.get<Task[]>(URL, options);
    let obs = of([
        {
          id: '1',
          title: "Assistir à aula do curso Santander Coders",
          description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
          dueDate: new Date(),
          priority: TaskPriority.Medium,
          labels: [],
          done: false,
        },
        {
          id: '2',
          title: "Fazer a Atividade 05 da Forca 2.0",
          description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
          dueDate: new Date(),
          priority: TaskPriority.High,
          labels: [],
          done: false,
        }
      ]);
      
      // throw Error("New Error"); 

      return obs.pipe(delay(2000));
  }
}
