import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './components/top-bar/top-bar.component';

import { CartRoutingModule } from '../cart/cart-routing.module';
@NgModule({
  declarations: [
    TopBarComponent,
  ],
  imports: [
    CartRoutingModule,
    CommonModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class LayoutModule { }
