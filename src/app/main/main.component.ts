import { Component, OnInit } from '@angular/core';
import { PopulateUsersService } from '../populate-users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private users: any[] = []

  name: string = "";
  email: string= "";

  constructor(private userService : PopulateUsersService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addInTable() {
    console.log(this.name);
    console.log(this.email);
    if(this.name == "" || this.email == "") {
      return;
    }

    this.users.push({name:this.name, email:this.email});

    this.name="";
    this.email="";
  }
  
  deleteFromTable(user) {
    console.log(user);
    this.users = this.users.filter(a => user.name != a.name || user.email != a.email);
  }

}