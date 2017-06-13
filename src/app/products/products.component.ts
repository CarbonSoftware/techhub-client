import {Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {product} from "../shared/product.model";
import {ProductsService} from "../shared/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, DoCheck {
  products: product[] = [];
  productSelected: product;
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    //service will get products from database and inject them here
    this.getProducts();
  }


  //let product service handle this
  search() {
    console.log('product');
    this.products = this.productService.getProducts();
    console.log('sent product to service');
    this.products = this.productService.search(this.searchInput.nativeElement.value);
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  onProductSelected(productEl: product) {
    this.productSelected = productEl;
  }

  sort(sortType: string): product[] {
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

  ngDoCheck() {
  }

}
