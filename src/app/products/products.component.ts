import {Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  constructor(private productService: ProductsService) {
    //service will get products from database and inject them here
    this.getProducts();

  }

  sort() {
    this.products = this.productService.sortByPrice(this.sortType);
  }

  //let product service handle this
  search() {
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

  ngOnInit() {
    this.sort();
  }

  ngDoCheck() {
  }

}
