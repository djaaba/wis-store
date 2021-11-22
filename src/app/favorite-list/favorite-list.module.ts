import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-list-routing.module';
import { FavoriteComponent } from './components/favorite-list/favorite-list.component';



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule { }
