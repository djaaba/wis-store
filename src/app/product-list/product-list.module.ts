import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './components/product-list/product-list.component';

import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    DialogContentExampleDialog,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    ProductListRoutingModule
  ],
  exports: [
  ]
})
export class ProductListModule { }
