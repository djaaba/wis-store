import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, products } from '../../products';

import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() itemsCart: Number[] = this.productService.itemsCart;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) { 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);

    console.log(product)

    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
