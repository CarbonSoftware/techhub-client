import {EventEmitter, Injectable} from '@angular/core';
import {Product} from "./models/products/product.model";
import {Specs} from "./models/products/productSpecs.model";

@Injectable()
export class ProductsService {
  specs: Specs = new Specs(
    'GSM/HSPA/LTE',
    ["april", 'june'],
    ['148.9 x 232', '155g', 'gorilla glass', 'single sim', 'other details'],
    ['Super Amoled', '5.8 inches', '1440x334', 'yes', 'gorilla glass', 'other'],
    ['Andriod', 'Chipset erefw', 'octacore', 'gpu 540'],
    ['card slot ssd', '64gb'],
    ['12mp', 'sensors', 'video 2160p', '8mp']
  );
  private products: Product[] = [
    new Product(23, 'specsTest', 'samsung s8 specs', 600, '../../../assets/img/samsung.jpg', this.specs),
    new Product(1, 'name',
      `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
      646, '../../../assets/img/samsung.jpg', this.specs),
    new Product(19, 'second',
      `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
      646, '../../../assets/img/samsung.jpg', this.specs),
    new Product(2, 'third', 'description of the Product', 456, '../../../assets/img/iphone.jpg', this.specs),
    new Product(3, 'fourth', 'description of the Product', 654, '../../../assets/img/nokia.jpg', this.specs),
    new Product(4, 'fifth', 'description of the Product', 503, '../../../assets/img/vodaphone.jpg', this.specs),
    new Product(5, 'sixth', 'description of the Product', 514, '../../../assets/img/iphone.jpg', this.specs),
    new Product(6, '8th', 'description of the Product', 324, '../../../assets/img/iphone.jpg', this.specs),
    new Product(7, '9th', 'description of the Product', 239, '../../../assets/img/iphone.jpg', this.specs),
    new Product(8, '10th',
      `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
      646, '../../../assets/img/samsung.jpg', this.specs),
    new Product(9, '11th', 'description of the Product', 456, '../../../assets/img/vodaphone.jpg', this.specs),
    new Product(10, '12th', 'description of the Product', 300, '../../../assets/img/vodaphone.jpg', this.specs),
    new Product(11, '13th',
      `There’s no denying the Samsung Galaxy S8 is a stunning device, with a smooth glass front
         and back that’s easy to hold in one hand. The curved screen gives you loads of room to enjoy
          all your favourite apps, games and videos. And the Quad HD resolution means you’ll see every detail. `,
      646, '../../../assets/img/samsung.jpg', this.specs),
    new Product(12, '14th', 'description of the Product', 700, '../../../assets/img/samsung.jpg', this.specs),
    new Product(13, '15th', 'description of the Product', 249, '../../../assets/img/samsung.jpg', this.specs),
    new Product(14, '10th', 'description of the Product', 399, '../../../assets/img/iphone.jpg', this.specs),
    new Product(15, '11th', 'description of the Product', 34, '../../../assets/img/vodaphone.jpg', this.specs),
    new Product(16, '12th', 'description of the Product', 234, '../../../assets/img/vodaphone.jpg', this.specs),
    new Product(17, '13th', 'description of the Product', 345, '../../../assets/img/samsung.jpg', this.specs),
    new Product(18, '16th', 'description of the Product', 150, '../../../assets/img/samsung.jpg', this.specs)
  ];
  onProductSelect: EventEmitter<Product> = new EventEmitter();
  productSelected: Product;
  productsCompare: Product[] = [];
  onProductCompare: EventEmitter<Product> = new EventEmitter();

  constructor() {
    this.products = this.getProducts();
    this.onProductSelect.subscribe(
      (product: Product) => {
        console.log('product selected: ' + product)
        this.productSelected = product
      }
    );
    this.onProductCompare.subscribe(
      (product: Product) => {
        console.log('product added to compare array: ' + product)
        this.productsCompare.push(product);
      }
    );

  }

  //return array of products from the server
  getProducts() {
    return this.products.slice();
  }

  clearCompare() {
    this.productsCompare.splice(0, this.productsCompare.length);
  }

}
