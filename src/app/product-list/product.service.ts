import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemsCart: Number[] = [];
  itemsCart1: Product[] = [];
  itemsFavorite: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    if (this.itemsCart.includes(product.price)){
      product.counter++;
      console.log(product.counter)
    }else{
      this.itemsCart.push(product.price);
      console.log(this.itemsCart)
    }
  }

  getItemsCart() {
    return this.itemsCart;
  }

  getItemsFavorite() {
    return this.itemsFavorite;
  }

  addToFavorite(product: Product) {
    if (!product.isliked) {
      this.itemsFavorite.push(product);
      product.isliked = true;
    }
    else {
      const index = this.itemsFavorite.indexOf(product);
      if (index > -1) {
        this.itemsFavorite.splice(index, 1);
      }
      product.isliked = false;
    }
  }
  getNiceNum(value: any): string {
    return String(value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
  }
}
