import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  email: number;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(id: string, name: string) {
    this.router.navigate(['/users', id, name], {queryParams: {allowEdit: 'false'}, fragment: 'token'});
  }

}
