import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product, products } from '../../products';

import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output()
  public cock = new EventEmitter();

  products = products;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
  }

  addToLike(product: Product): void {
    this.productService.addToLike(product)
  }

  addToBusket(product: Product):void{
    this.productService.addToBusket(product)
  }
}
