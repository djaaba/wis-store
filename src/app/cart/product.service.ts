import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemsBusket: Product[] = [];
  itemsLike: Product[] = [];

  constructor() { }

  addToBusket(product: Product) {
    this.itemsBusket.push(product);
  }

  getItemsBusket() {
    return this.itemsBusket;
  }
  
  getItemsLike() {
    return this.itemsLike;
  }

  addToLike(product: Product) {
    this.itemsLike.push(product);
    // if(!this.isliked){˚
    // } 
  }
}
