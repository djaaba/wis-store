import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSheetRoutingModule } from './order-sheet-routing.module';
import { OrderSheetComponent } from './components/order-sheet/order-sheet.component';

import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    OrderSheetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderSheetRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [

  ]
})
export class OrderSheetModule { }
