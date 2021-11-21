import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/product-list/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsBusket = this.productService.getItemsBusket();

  constructor(public productService: ProductService) { }
  // В чем отличие указывать private/public для проекта?
  ngOnInit(): void {
  }

}
