import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {product} from "../product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: product;
  @Output() onReset: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.product = null;
  }

}
