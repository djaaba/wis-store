import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, products } from '../../products';

import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  value: number = 1;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart(): void {
    while (this.value != 0) {
      this.productService.addToCart(this.data)
      this.value--;
    }
    this.value = 1;
  }

  getSum(): string {
    return this.productService.getNiceNum(this.value * this.data.price);
  }

  ngOnInit(): void {
  }
}
