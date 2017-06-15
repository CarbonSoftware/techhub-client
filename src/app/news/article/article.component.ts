import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.params['title'];
    this.route.params.subscribe(
      (param: Params) => {
        this.title = param['title'];
      }
    );
  }

}
