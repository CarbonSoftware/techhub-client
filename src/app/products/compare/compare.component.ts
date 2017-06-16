import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../shared/models/products/product.model";
import {ProductsService} from "../../shared/products.service";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.productsCompare;
  }

  back() {
    this.router.navigate(['products']);
    this.productService.clearCompare();
  }

}
