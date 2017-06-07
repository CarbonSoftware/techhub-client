import { Component, OnInit } from '@angular/core';
import {product} from "./product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: product[] = [
    new product('name', 'description of the product', 503, '../'),
    new product('second', 'description of the product', 534),
    new product('third', 'description of the product', 324),
    new product('fourth', 'description of the product', 352),
    new product('fifth', 'description of the product', 503, '../'),
    new product('sixth', 'description of the product', 534),
    new product('third', 'description of the product', 324),
    new product('fourth', 'description of the product', 352)
  ];


  constructor() {
    //service will get products from database and inject them here

  }

  ngOnInit() {
  }

}
