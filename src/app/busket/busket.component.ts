import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ProductService } from '../product.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss']
})
export class BusketComponent implements OnInit {

  itemsBusket = this.productService.getItemsBusket();
  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    
  }

  ngOnInit(): void {
  }

}
