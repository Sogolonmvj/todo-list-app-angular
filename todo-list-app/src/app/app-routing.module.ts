import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task-list'},
  { path: 'task-list', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'task', component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditTaskComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
