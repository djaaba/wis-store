import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './comporents/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';

import { DialogCardModule } from '../dialog-card/dialog-card.module';

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,

    DialogCardModule
  ],
  exports: [
  ]
})
export class CartModule { }
