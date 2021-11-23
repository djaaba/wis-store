import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogCardComponent } from './dialog-card/dialog-card.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    DialogCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DialogCardComponent
  ]
})
export class DialogCardModule { }
