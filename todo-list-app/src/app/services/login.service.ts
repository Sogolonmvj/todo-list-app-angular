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
    console.log(this.authenticated);
    this.showMenu.emit(this.authenticated);

    if (this.authenticated) this.router.navigate(['']);
  }

  logoutUser() {
    this.authenticated = false;
    this.showMenu.emit(this.authenticated);
    this.router.navigate(['login']);
  }

  userIsLoggedIn(): boolean {
    return this.authenticated;
  }
  
}
