import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusketComponent } from './busket/busket.component';
import { ProductListComponent } from './cart/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'busket',
    component: BusketComponent
  },
  {
    path: '',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
