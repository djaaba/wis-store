import { Injectable } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemsCart: Product[] = [];
  itemsFavorite: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    if (!this.itemsCart.includes(product)) {
      this.itemsCart.push(product)
    } else {
      let index = this.itemsCart.indexOf(product);
      this.itemsCart[index].counter++;
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
