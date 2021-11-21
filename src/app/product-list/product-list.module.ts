import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';

// import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    DialogContentExampleDialog,
  ],
  imports: [
    CommonModule,
    // MatDialogModule
    RouterModule
  ],
  exports: [
    ProductListComponent,
    DialogContentExampleDialog,
  ]
})
export class ProductListModule { }
