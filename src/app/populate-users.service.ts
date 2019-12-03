import { Injectable } from '@angular/core';

@Injectable()
export class PopulateUsersService {

  constructor() { }

  public getUsers(): any[] {
    return [
      { name: "Mihai", email: "mihai@mihai.com" },
      { name: "Aurel", email: "aurel@haurel.com" }
    ];
  }
}