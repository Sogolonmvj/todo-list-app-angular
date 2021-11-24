import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticated: boolean = false;

  showMenu: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  loginUser(login: string, password: string) {
    this.authenticated = (login === 'sogo@admin.com' && password === '123456');
    this.showMenu.emit(this.authenticated);

    if (this.authenticated) this.router.navigate(['']);
  }
}
