import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../models/task.model';

import { ApiService } from './api.service';

const URL = "http://localhost:3000/posts";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient, private api: ApiService) {
    
  }

  getTasks() {

    return this.http.get<Task[]>(URL);

  };

};
