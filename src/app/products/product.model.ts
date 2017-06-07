export class product {
  name: string;
  description: string;
  price: number;
  imagePath: string;

  constructor(name: string, description: string, price: number, imagePath?: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
  }
}
