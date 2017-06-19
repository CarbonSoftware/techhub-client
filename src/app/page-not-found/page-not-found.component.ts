import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, AfterViewChecked{

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    setTimeout(this.redirect(), 3000);
  }

  redirect(): any {
    this.router.navigate(['products']);
  }

}
