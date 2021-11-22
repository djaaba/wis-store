import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/product-list/product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(public productService: ProductService) { }

  itemsFavorite = this.productService.getItemsFavorite();

  ngOnInit(): void {
  }

  getNumber(value: any){
    return this.productService.getNiceNum(value) + " руб";
  }

  // как правильней? getNumber() или price

  get price(): string {
    let sum =  this.productService.itemsFavorite.reduce(function (accumuator, currentValue) {
      return accumuator + currentValue.price;
    }, 0)
    return String(sum).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + " руб"
  }
}
