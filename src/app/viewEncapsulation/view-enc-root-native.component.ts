import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'view-enc-root-native',
  template: `
    <ul>
      <li>test</li>
      <li>test</li>
    </ul>
    <div class="my-class">test</div>
    <view-enc-example1></view-enc-example1>`,
  styles: [`.my-class {
    background-color: red;
  }

  ul {
    background: green;
  }
  body{
    margin-left: 20px;
  }`],
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncRootNativeComponent {

}
