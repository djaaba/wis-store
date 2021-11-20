import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from '../cart/components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class CartModule { }
