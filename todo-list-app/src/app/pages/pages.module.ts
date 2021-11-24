import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    LoginComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    TodoListComponent
  ],
})

export class PagesModule { }
