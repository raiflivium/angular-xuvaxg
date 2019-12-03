import { Component, OnInit } from '@angular/core';
import  { User } from '../model/user';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private user: User;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}