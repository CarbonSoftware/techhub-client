import {Specs} from "./productSpecs.model";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  specs: Specs;
  isSelected: boolean;

  constructor(id: number, name: string, description: string, price: number,
              imagePath?: string, specs?: Specs) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
    this.specs = specs;
    this.isSelected = false;
  }
}
