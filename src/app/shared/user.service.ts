import { Injectable } from '@angular/core';
import {User} from "./models/user.model";

@Injectable()
export class UserService {
  private user: User;

  constructor() {
    this.user = new User(1, 'dipon');
  }

  getUser(): User {
    return this.user;
  }

}
