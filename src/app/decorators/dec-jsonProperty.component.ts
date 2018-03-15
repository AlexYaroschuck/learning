import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dec-json-property',
  template: `<div *ngFor="let order of orders">{{order.OrderId}} / {{order.TransactionId}}</div>`
})
export class DecJsonPropertyComponent implements OnInit {

  public orders: Order[] = [];

  public data: any = [
    {
      Id: 123,
      TrId: 543
    }
  ];

  ngOnInit() {
    for (const i of this.data) {
      this.orders.push(i);
    }
  }
}

class Order {

  @jsonProperty('Id')
  public OrderId: number;

  @jsonProperty('TrId')
  public TransactionId: number;
}

export function jsonProperty(propertyName: string) {
  return function (target: any, propertyKey: string) {

  };
}


