import {Component, Inject, InjectionToken} from '@angular/core';
import {THIRD_PARTY_LIB_PROVIDERS} from './appConfig1';

const apiUrl = new InjectionToken<string>('apiUrl')

@Component({
  selector: 'di-it',
  template: `***** {{apiUrl}} <br>`,
  providers: [

    {provide: apiUrl, useValue: THIRD_PARTY_LIB_PROVIDERS}, // HOW TO USE?????????
    {provide: apiUrl, useValue: 'customApiUrl'},

  ]
})
export class InjectionTokenComponent {

  constructor(@Inject(apiUrl)public apiUrl, public apiUrk: string){
  //console.log(this.apiUrl2);
  }
}
