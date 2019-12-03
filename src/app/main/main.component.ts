import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

import { UserService } from '../service/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private users: User[] = []

  private user: User;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data.data);
    this.user = new User("","", "", "");
  }

  addInTable() {
    console.log(this.user.first_name);
    console.log(this.user.last_name);
    console.log(this.user.email);
    if(this.user.first_name == "" || this.user.last_name == "" || this.user.email == "") {
      return;
    }

    this.users.push(new User(this.user.first_name, this.user.last_name, this.user.email, ""));

    this.user = new User("", "", "", "");
  }
  
  deleteFromTable(user) {
    console.log(user);
    this.users = this.users.filter(a => user.first_name != a.first_name || user.last_name != a.last_name || user.email != a.email);
  }

}