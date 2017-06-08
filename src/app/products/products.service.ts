import { Injectable } from '@angular/core';
import {product} from "./product.model";

@Injectable()
export class ProductsService {

  constructor() { }

  //return array of products from the server
  getProducts() {
    return [
      new product('name', 'description of the product', 503, '../../../assets/img/DOOGEE.jpg'),
      new product('second', 'description of the product', 534, '../../../assets/img/iphone.jpg'),
      new product('third', 'description of the product', 456, '../../../assets/img/iphone.jpg'),
      new product('fourth', 'description of the product', 654, '../../../assets/img/nokia.jpg'),
      new product('fifth', 'description of the product', 503, '../../../assets/img/vodaphone.jpg'),
      new product('sixth', 'description of the product', 514, '../../../assets/img/iphone.jpg'),
      new product('8th', 'description of the product', 324, '../../../assets/img/iphone.jpg'),
      new product('9th', 'description of the product', 239, '../../../assets/img/iphone.jpg'),
      new product('10th', 'description of the product', 399, '../../../assets/img/iphone.jpg'),
      new product('11th', 'description of the product', 456, '../../../assets/img/vodaphone.jpg'),
      new product('12th', 'description of the product', 300, '../../../assets/img/vodaphone.jpg'),
      new product('13th', 'description of the product', 646, '../../../assets/img/samsung.jpg'),
      new product('14th', 'description of the product', 700, '../../../assets/img/samsung.jpg'),
      new product('15th', 'description of the product', 249, '../../../assets/img/samsung.jpg'),
      new product('10th', 'description of the product', 399, '../../../assets/img/iphone.jpg'),
      new product('11th', 'description of the product', 34, '../../../assets/img/vodaphone.jpg'),
      new product('12th', 'description of the product', 234, '../../../assets/img/vodaphone.jpg'),
      new product('13th', 'description of the product', 345, '../../../assets/img/samsung.jpg'),
      new product('16th', 'description of the product', 150, '../../../assets/img/samsung.jpg')
    ];
  }
}
