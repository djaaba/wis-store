import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product-list/product-list.module').then((m) => m.ProductListModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  { 
    path: 'favorite', 
    loadChildren: () => import('./favorite-list/favorite-list.module').then(m => m.FavoriteModule) },
  { path: 'order-sheet', loadChildren: () => import('./order-sheet/order-sheet.module').then(m => m.OrderSheetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
