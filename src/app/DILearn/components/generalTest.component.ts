import {Component} from '@angular/core';
import {Data1Service} from '../services/data1.service';
import {Data2Service} from '../services/data2.service';

@Component({
  selector: 'general-test',
  template: `
    <di-test></di-test>
    <br>
    <di-test-2></di-test-2>
  `,
})
export class GeneralTestComponent {

}
