import {Component, DoCheck, OnInit} from '@angular/core';
import {product} from "./product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, DoCheck {
  products: product[] = [
    new product('name', 'description of the product', 503, '../'),
    new product('second', 'description of the product', 534),
    new product('third', 'description of the product', 324),
    new product('fourth', 'description of the product', 352),
    new product('fifth', 'description of the product', 503, '../'),
    new product('sixth', 'description of the product', 514),
    new product('8th', 'description of the product', 324),
    new product('9th', 'description of the product', 239),
    new product('10th', 'description of the product', 399, '../'),
    new product('11th', 'description of the product', 456),
    new product('12th', 'description of the product', 300),
    new product('13th', 'description of the product', 646),
    new product('14th', 'description of the product', 700, '../'),
    new product('15th', 'description of the product', 249),
    new product('16th', 'description of the product', 150)
  ];
  sortType: string = 'relevance';

  constructor() {
    //service will get products from database and inject them here

  }

  sort() {
    console.log(this.sortType);
    if (this.sortType === 'relevance') {

    }else if (this.sortType === 'priceAscending') {
      this.products.sort(function(a, b){
        return a.price - b.price;
      })
    }else if (this.sortType === 'priceDescending') {

    } else {
      console.log('error: ' + this.sortType + ' is not recognised');
    }
  }

  ngOnInit() {
    this.sort();
  }

  ngDoCheck() {
    this.sort();
  }

}
