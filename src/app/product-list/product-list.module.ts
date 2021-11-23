import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';

import { MatDialogModule } from '@angular/material/dialog';

import { ProductListRoutingModule } from './product-list-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';

import { DialogCardModule } from '../dialog-card/dialog-card.module';

@NgModule({
  declarations: [
    ProductListComponent,
    DialogComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    RouterModule,
    ProductListRoutingModule,
    DialogCardModule
  ],
  exports: [
  ]
})
export class ProductListModule { }
