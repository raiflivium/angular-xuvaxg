import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { User } from '../model/user';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private user: User;

  constructor(private router: Router, private userService : UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  firstPage() {
    this.router.navigate(['/']);
  }

}