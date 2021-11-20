import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../products';
import { ProductService } from '../../product.service';

import {MatDialog} from '@angular/material/dialog';

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

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
export class DialogContentExampleDialog {}