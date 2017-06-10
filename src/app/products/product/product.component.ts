import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {product} from "../product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') item: product;
  @Output() productSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    console.log('onselected');
    this.productSelected.emit(null);
  }

}
