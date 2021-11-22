import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './components/top-bar/top-bar.component';

import { RouterModule } from '@angular/router';
import { CartRoutingModule } from '../cart/cart-routing.module';
@NgModule({
  declarations: [
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TopBarComponent
  ]
})
export class LayoutModule { }
