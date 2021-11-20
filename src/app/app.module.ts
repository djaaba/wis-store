import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BusketComponent } from './busket/busket.component';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';
import { CartModule } from './cart/cart.module';

import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    BusketComponent,
    DialogComponent,
    DialogContentExampleDialog,
  ],
  imports: [
    LayoutModule,
    CartModule,
    AppRoutingModule,

    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
