
import {Component} from '@angular/core';
import {Data4Service} from '../services/example2/data4.service';


@Component({
  selector: 'di-example2',
  template: `
    <div *ngFor="let d of dataService.getData()">* {{d}},</div>
    <br>
    <button (click)="addItem('Data4 ' + data1Index )">Add new Item </button>
    
    <div>another component</div>
    <di-example3></di-example3>
  `,
})
export class PracticeExample2Component {
  public data1Index: number = 5;
  constructor(public dataService: Data4Service) {
  }

  public addItem(text: string) {
    this.data1Index++;
    this.dataService.addData(text);
  }
}
