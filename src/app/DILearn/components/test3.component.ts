import {Component} from '@angular/core';
import {Data1Service} from '../services/data1.service';
import {Data2Service} from '../services/data2.service';

@Component({
  selector: 'di-test-3',
  template: `
    <br>
    <span style="background: yellow">This is Data1Service: </span>
    <span *ngFor="let d of data1Service.getData()">{{d}}, </span>
    <br>
    <button (click)="addItemToData1('Data1Service_' + (++data1Index) )">Add new Item To D1S</button>
    <br>
    <span style="background: yellow">This is Data2Service: </span>
    <span *ngFor="let d of data2Service.getData()">{{d}}, </span>
    <br>
    <button (click)="addItemToData2('Data2Service_' + data1Index )">Add new Item To D2S</button>`,
  providers: [
    {provide: Data1Service, useClass: Data2Service},
    {provide: Data2Service, useClass: Data1Service}
  ]
})
export class Test3Component {
  public data1Index: number = 5;
  public data2Index: number = 5;

  constructor(public data1Service: Data1Service, public data2Service: Data2Service) {
  }

  public addItemToData1(text: string) {
    this.data1Index++;
    this.data1Service.addData(text);
  }

  public addItemToData2(text: string) {
    this.data2Index++;
    this.data2Service.addData(text);
  }
}
