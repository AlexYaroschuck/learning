import {Component} from '@angular/core';

// TODO also show $implict parameter
@Component({
  selector: 'template-for-ex',
  template: `
    <ng-template [ngForOf]="dataArray" let-i="index" ngFor let-item>
      <span style="color:green">* {{i}}: </span>
      <span style="color: red">{{item.number}} => {{item.description}}</span>
      <br>
    </ng-template>`
})
export class TemplateForExampleComponent {
  dataArray = [{
    number: 'one',
    description: 'the first'
  },
    {
      number: 'two',
      description: 'the second'
    },
    {
      number: 'three',
      description: 'the third'
    },
    {
      number: 'four',
      description: 'the fourth'
    }];
}
