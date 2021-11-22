import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

import { Product, products } from '../../products';
import { ProductService } from '../../product.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: { name: product.name.substr(product.name.indexOf(" ") + 1), img: product.img, price: product.price },
    });
  }

  addToLike(product: Product): void {
    this.productService.addToLike(product)
  }

  addToBusket(product: Product): void {
    this.productService.addToBusket(product)
  }
}

