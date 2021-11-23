import { Component, OnInit, Inject, Input, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../product-list/products';

import { ProductService } from '../../product-list/product.service';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss']
})
export class DialogCardComponent implements OnInit {

  value: number = 1;

  itemsCart = this.productService.getItemsCart();

  // @Input() data: Product;
  constructor(
    private productService: ProductService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Product,
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    while (this.value !== 0) {
      this.productService.addToCart(this.data)
      this.value--;
    }
    this.value = 1;
  }

  getSum(): string {
    return this.productService.getNiceNum(this.value * this.data.price);
  }
}
