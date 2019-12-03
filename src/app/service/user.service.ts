import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

}