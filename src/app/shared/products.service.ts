import {EventEmitter, Injectable} from '@angular/core';
import {Product} from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [
      new Product(1, 'name',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg', `cpu: adrino ram: 4gb res: 720px`),
      new Product(19, 'second',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg'),
      new Product(2, 'third', 'description of the Product', 456, '../../../assets/img/iphone.jpg'),
      new Product(3, 'fourth', 'description of the Product', 654, '../../../assets/img/nokia.jpg'),
      new Product(4, 'fifth', 'description of the Product', 503, '../../../assets/img/vodaphone.jpg'),
      new Product(5, 'sixth', 'description of the Product', 514, '../../../assets/img/iphone.jpg'),
      new Product(6, '8th', 'description of the Product', 324, '../../../assets/img/iphone.jpg'),
      new Product(7, '9th', 'description of the Product', 239, '../../../assets/img/iphone.jpg'),
      new Product(8, '10th',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg'),
      new Product(9, '11th', 'description of the Product', 456, '../../../assets/img/vodaphone.jpg'),
      new Product(10, '12th', 'description of the Product', 300, '../../../assets/img/vodaphone.jpg'),
      new Product(11, '13th',
        `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
        646, '../../../assets/img/samsung.jpg'),
      new Product(12, '14th', 'description of the Product', 700, '../../../assets/img/samsung.jpg'),
      new Product(13, '15th', 'description of the Product', 249, '../../../assets/img/samsung.jpg'),
      new Product(14, '10th', 'description of the Product', 399, '../../../assets/img/iphone.jpg'),
      new Product(15, '11th', 'description of the Product', 34, '../../../assets/img/vodaphone.jpg'),
      new Product(16, '12th', 'description of the Product', 234, '../../../assets/img/vodaphone.jpg'),
      new Product(17, '13th', 'description of the Product', 345, '../../../assets/img/samsung.jpg'),
      new Product(18, '16th', 'description of the Product', 150, '../../../assets/img/samsung.jpg')
    ];
    onProductSelect: EventEmitter<Product> = new EventEmitter();
    productSelected: Product;

  constructor() {
    this.products = this.getProducts();
    this.onProductSelect.subscribe(
      (product: Product) => {
        this.productSelected = product;
      }
    );

  }

  //return array of products from the server
  getProducts() {
    return this.products.slice();
  }

}
