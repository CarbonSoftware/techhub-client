import {Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../shared/models/products/product.model";
import {ProductsService} from "../shared/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  private products: Product[] = [];
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private productService: ProductsService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
    this.productService.clearCompare();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  sort(sortType: string): Product[] {
    console.log(sortType);
    if (sortType === 'relevance') {
      this.products.sort();
    }else if (sortType === 'priceAscending') {
      this.products.sort(function(a, b){
        return a.price - b.price
      });
    }else if (sortType === 'priceDescending') {
      this.products.sort(function(a, b) {
        return b.price - a.price
      });
    } else {
      console.log('error: ' + sortType + ' is not recognised');
    }
    return this.products;
  }

  //make a GET Request to server to receive items searched for
  search(value): void {
    const found: Product[] = [];
    this.getProducts();
    if (value === '') return;
    console.log('not null');
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].name === value) {
        found.push(this.products[i]);
      }
    }
    console.log('return Product array');
    this.products = found;
  }

  compare() {
    //this.productService.onProductCompare.emit(this.item);
    this.router.navigate(['compare']);
  }

  onChecked(product: Product) {
    this.productService.onProductCompare.emit(product);
  }


}
