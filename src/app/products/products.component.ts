import { Component, OnInit } from '@angular/core';
import {product} from "./product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: product[] = [];
  test1: product = new product('name', 'description of the product', 503, '../');
  test2: product = new product('second', 'description of the product', 534);
  test3: product = new product('third', 'description of the product', 324);
  test4: product = new product('fourth', 'description of the product', 352);

  constructor() {
    //service will get products from database and inject them here
    this.products.push(this.test1);
    this.products.push(this.test2);
    this.products.push(this.test3);
    this.products.push(this.test4);
  }

  ngOnInit() {
  }

}
