export class product {
  name: string;
  description: string;
  price: number;
  imagePath: string;
  specs: string;

  constructor(name: string, description: string, price: number, imagePath?: string, specs?: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
    this.specs = specs;
  }
}
