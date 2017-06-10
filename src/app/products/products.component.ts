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
  productSelected: product;
  sortType: string = 'relevance';

  constructor(private productService: ProductsService) {
    //service will get products from database and inject them here
    this.getProducts();

  }

  sort() {
    this.products = this.productService.sortByPrice(this.sortType);
  }

  search() {
    this.productService.search();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  onProductSelected(productEl: product) {
    this.productSelected = productEl;
  }

  onResetClicked() {
    this.productSelected = null;
  }

  ngOnInit() {
    this.sort();
  }

  ngDoCheck() {
  }

}
