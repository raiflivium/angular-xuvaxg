import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

import { PopulateUsersService } from '../populate-users.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private users: User[] = []

  private user: User;

  constructor(private userService : PopulateUsersService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.user = new User("","");
  }

  addInTable() {
    console.log(this.user.name);
    console.log(this.user.email);
    if(this.user.name == "" || this.user.email == "") {
      return;
    }

    this.users.push(new User(this.user.name, this.user.email));

    this.user = new User("", "");
  }
  
  deleteFromTable(user) {
    console.log(user);
    this.users = this.users.filter(a => user.name != a.name || user.email != a.email);
  }

}