import {Component, DoCheck, OnInit} from '@angular/core';
import {product} from "./product.model";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, DoCheck {
  products: product[] = [];
  sortType: string = 'relevance';

  constructor(private productService: ProductsService) {
    //service will get products from database and inject them here
    this.products = productService.getProducts();

  }

  sort() {
    console.log(this.sortType);
    if (this.sortType === 'relevance') {
      this.products.sort();
    }else if (this.sortType === 'priceAscending') {
      this.products.sort(function(a, b){
        return a.price - b.price
      });
    }else if (this.sortType === 'priceDescending') {
      this.products.sort(function(a, b) {
        return b.price - a.price
      });
    } else {
      console.log('error: ' + this.sortType + ' is not recognised');
    }
  }

  ngOnInit() {
    this.sort();
  }

  ngDoCheck() {
  }

}
