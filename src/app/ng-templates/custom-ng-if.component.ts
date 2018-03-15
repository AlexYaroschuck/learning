import {Component} from '@angular/core';
import {MyIfDirective} from './my-if.directive';

@Component({
  selector: 'custom-ng-if',
  template: `<div *myIf="showContent">
    my custom content
  </div>
  <button (click)="showContent = !showContent">Show/Hide</button>`,
})
export class CustomNgIfComponent {
  public showContent = false;
}
