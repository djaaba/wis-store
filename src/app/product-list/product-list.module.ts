import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './components/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ProductListComponent,

    DialogContentExampleDialog,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [
    ProductListComponent,
    DialogContentExampleDialog,
  ]
})
export class ProductListModule { }
