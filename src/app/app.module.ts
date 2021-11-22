import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './layout/layout.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,

    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
