import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product-list/product.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  get busketCount(): number{
    return this.productService.itemsBusket.length;
  }
  get price() : number{
    return this.productService.itemsBusket.reduce(function(accumuator, currentValue){
      return accumuator + currentValue.price;
    }, 0)
  }
  get likedCount(){
    return this.productService.itemsLike.length;
  }
}
