import {InjectionToken} from '@angular/core';

const apiUrl = new InjectionToken<string>('apiUrl')

export const THIRD_PARTY_LIB_PROVIDERS = [
  {provide: apiUrl, useValue: 'third-party-api-url'}
];
