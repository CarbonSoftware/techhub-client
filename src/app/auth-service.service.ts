import { Injectable } from '@angular/core';
import {reject} from "q";

@Injectable()
export class AuthService {
  loggedIn: boolean = false;

  isAuth() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
