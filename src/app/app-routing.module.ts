import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusketComponent } from './busket/busket.component';
import { ProductListComponent } from './product-list/components/product-list/product-list.component';
const routes: Routes = [
  {
    path: 'busket',
    component: BusketComponent
  },
  {
    path: '',
    // loadChildren: () => import('./product-list/product-list.module').then((m) => m.ProductListModule)
    component: ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
