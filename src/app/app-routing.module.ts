import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusketComponent } from './busket/busket.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'busket', component: BusketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
