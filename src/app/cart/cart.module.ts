import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './comporents/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  exports: [
  ]
})
export class CartModule { }
