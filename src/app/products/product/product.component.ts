import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../../shared/models/products/product.model";
import {ProductsService} from "../../shared/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') item: Product;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  onSelected() {
    this.productService.onProductSelect.emit(this.item);
    this.router.navigate(['product', this.item.id]);
  }

}
