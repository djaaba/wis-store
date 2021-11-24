import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSheetComponent } from './components/order-sheet/order-sheet.component';

const routes: Routes = [{ path: '', component: OrderSheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSheetRoutingModule { }
