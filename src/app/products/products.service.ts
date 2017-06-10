import { Injectable } from '@angular/core';
import {product} from "./product.model";

@Injectable()
export class ProductsService {
    products: product[];

  constructor() {
    this.products = this.getProducts();
  }

  //return array of products from the server
  getProducts() {
    return [
      new product('name',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg', `cpu: adrino ram: 4gb res: 720px`),
      new product('second',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg'),
      new product('third', 'description of the product', 456, '../../../assets/img/iphone.jpg'),
      new product('fourth', 'description of the product', 654, '../../../assets/img/nokia.jpg'),
      new product('fifth', 'description of the product', 503, '../../../assets/img/vodaphone.jpg'),
      new product('sixth', 'description of the product', 514, '../../../assets/img/iphone.jpg'),
      new product('8th', 'description of the product', 324, '../../../assets/img/iphone.jpg'),
      new product('9th', 'description of the product', 239, '../../../assets/img/iphone.jpg'),
      new product('10th',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg'),
      new product('11th', 'description of the product', 456, '../../../assets/img/vodaphone.jpg'),
      new product('12th', 'description of the product', 300, '../../../assets/img/vodaphone.jpg'),
      new product('13th',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg'),
      new product('14th', 'description of the product', 700, '../../../assets/img/samsung.jpg'),
      new product('15th', 'description of the product', 249, '../../../assets/img/samsung.jpg'),
      new product('10th', 'description of the product', 399, '../../../assets/img/iphone.jpg'),
      new product('11th', 'description of the product', 34, '../../../assets/img/vodaphone.jpg'),
      new product('12th', 'description of the product', 234, '../../../assets/img/vodaphone.jpg'),
      new product('13th', 'description of the product', 345, '../../../assets/img/samsung.jpg'),
      new product('16th', 'description of the product', 150, '../../../assets/img/samsung.jpg')
    ];
  }

  //make a GET Request to server to receive sorted list of products
  sortByPrice(sortType: string): product[] {
    console.log(sortType);
    if (sortType === 'relevance') {
      this.products.sort();
    }else if (sortType === 'priceAscending') {
      this.products.sort(function(a, b){
        return b.price - a.price
      });
    }else if (sortType === 'priceDescending') {
      this.products.sort(function(a, b) {
        return a.price - b.price
      });
    } else {
      console.log('error: ' + sortType + ' is not recognised');
    }
    return this.products;
  }

  //make a GET Request to server to receive items searched for
  search() {

  }

}
