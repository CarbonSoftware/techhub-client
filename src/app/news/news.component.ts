import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: string = 'mytitle';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectArticle() {
    this.router.navigate(['news', 'articles', this.title]);
  }

}
