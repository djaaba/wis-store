import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BusketComponent } from './busket/busket.component';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './layout/layout.module';
import { ProductListModule } from './product-list/product-list.module';
import { ProductListRoutingModule } from './product-list/product-list-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BusketComponent,
  ],
  imports: [
    LayoutModule,
    ProductListModule,
    AppRoutingModule,
    ProductListRoutingModule,

    RouterModule,

    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
