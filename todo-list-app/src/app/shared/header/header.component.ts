import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, DoCheck, OnChanges {
  render: boolean = false; 

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.showMenu.subscribe(show => this.render = show)
  }

  ngDoCheck() {

  }

  ngOnChanges() {

  }

  logoutUser() {
    this.loginService.logoutUser();
  }

}
