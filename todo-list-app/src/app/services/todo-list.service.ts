import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../models/task.model';

import { delay, of, pipe } from 'rxjs';
import { Observable } from 'rxjs';

//  const URL = "http://madsti.com.br:9090/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() {
    
  }

  getTasks() {
    
    const objectArray: any = localStorage.getItem('Tasks');

    let obs;

    obs = of(objectArray);

    return obs.pipe(delay(2000));

  };

  createTask(title: string, description: string) {

    let objectArray: any;
    // let object: any = 


  }

}
