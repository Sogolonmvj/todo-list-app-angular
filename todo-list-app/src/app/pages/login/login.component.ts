import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'login': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onSubmit() {
    let login = this.loginForm?.controls['login'].value;
    let password = this.loginForm?.controls['password'].value;

    console.log(this.loginService.loginUser(login, password));
  }

}
