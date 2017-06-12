import {Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {product} from "../shared/product.model";
import {ProductsService} from "../shared/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, DoCheck {
  products: product[] = [];
  productSelected: product;
  sortType: string = 'relevance';
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    //service will get products from database and inject them here
    this.getProducts();
    this.sort();
  }

  sort() {
    this.products = this.productService.sortByPrice(this.sortType);
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

  onResetClicked() {
    this.productSelected = null;
  }

  ngDoCheck() {
  }

}
