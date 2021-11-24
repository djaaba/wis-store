import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSheetRoutingModule } from './order-sheet-routing.module';
import { OrderSheetComponent } from './components/order-sheet/order-sheet.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderSheetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderSheetRoutingModule,
  ],
})
export class OrderSheetModule { }
