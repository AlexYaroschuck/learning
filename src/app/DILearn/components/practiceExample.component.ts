import {Component, Inject} from '@angular/core';
import {CarService} from '../services/example1/car.service';
import {PhoneService} from '../services/example1/phone.service';
import {Router} from '@angular/router';

export function dataFactory(router: Router) {
  if (router.url.includes('car')) {
    return new CarService();
  } else {
    return new PhoneService();
  }
}

@Component({
  selector: 'di-example1',
  template: `
    <div *ngFor="let d of dataService.getData()">* {{d}},</div>
  `,
  providers: [
    {provide: 'sdafasdfdsa', useFactory: dataFactory, deps: [Router]}
  ]
})
export class PracticeExampleComponent {
  constructor(@Inject('sdafasdfdsa') public dataService: CarService)/*=> this is interface*/ {
  }
}
