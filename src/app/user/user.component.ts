import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../shared/user.service";
import {User} from "../shared/models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User(this.routes.snapshot.params['id'], this.routes.snapshot.params['name']);
    this.routes.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
