import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product-list/product.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  get cartCount(): string {
    let prefix = '';
    switch (this.productService.itemsCart.length % 10) {
      case 1:
        if (this.productService.itemsCart.length % 11 == 0 && this.productService.itemsCart.length < 20) prefix = 'ов';
        else prefix = '';
        break;
      case 2:
      case 3:
      case 4:
        prefix = 'a';
        break;
      default:
        prefix = 'ов';
        break;
    }
    return String(this.productService.itemsCart.length).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' товар' + prefix;
  }
  get price(): string {
    let sum = this.productService.itemsCart.reduce(function (accumuator, currentValue) {
      return accumuator + currentValue.price;
    }, 0)
    return String(sum).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + " руб"
  }
  get likedCount() {
    return this.productService.itemsFavorite.length;
  }
}
