export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  specs: string;

  constructor(id: number, name: string, description: string, price: number, imagePath?: string, specs?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
    this.specs = specs;
  }
}
