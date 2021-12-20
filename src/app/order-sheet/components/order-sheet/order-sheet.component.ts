import { Component, OnInit } from '@angular/core';

import { Customer } from '../../customer';

@Component({
  selector: 'app-order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.scss']
})
export class OrderSheetComponent implements OnInit {
  deliverySelect = ['Доставка', 'Самовывоз'];
  storePoints = ['Сервеный', 'Западный', 'Центр'];
  data = new Customer("", "", "", "", "", "", "");
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}
