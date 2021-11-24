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

  @Input() item!: Product;

  constructor(
    private productService: ProductService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Product,
    ) { }
    
  ngOnInit(): void {
  }

  getSum(): string {
    return this.productService.getNiceNum(this.data.counter * this.data.price);
  }
}
