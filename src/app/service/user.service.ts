import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable()
export class UserService {

  private currentUser: User;

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  public getUser(): User {
    return this.currentUser;
  }

  public setUser(user: User) {
    this.currentUser = user;
  }
}