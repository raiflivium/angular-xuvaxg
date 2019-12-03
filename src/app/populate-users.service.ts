import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable()
export class PopulateUsersService {

  constructor() { }

  public getUsers(): User[] {
    return [
      new User("Mihai", "mihai@mihai.com"),
      new User("Aurel", "aurel@haurel.com")
    ];
  }
}