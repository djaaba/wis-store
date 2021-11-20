import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../products';
import { ProductService } from '../../product.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '250px',
      data: {name: product.name, src: product.src, price: product.price},
    });
  }

  addToLike(product: Product): void {
    this.productService.addToLike(product)
  }

  addToBusket(product: Product): void {
    this.productService.addToBusket(product)
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: '../dialog/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}