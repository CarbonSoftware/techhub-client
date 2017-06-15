import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/models/products/product.model";
import {ProductsService} from "../../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private product: Product;

  constructor(private productService: ProductsService,
              private router: Router) {
  }

  ngOnInit() {
    this.product = this.productService.productSelected;
  }

  back() {
    this.router.navigate(['/buy']);
  }

}
