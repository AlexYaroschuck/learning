import {AppModule} from '../app.module';
import {Component, Injector, OnInit} from '@angular/core';
import 'reflect-metadata';
import {Data4Service} from '../DILearn/services/example2/data4.service';

//use all code from https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c
@Component({
  selector: 'dec-example2',
  template: `hello`
})
@logLifeCycles
@logInjectable
export class DecExample2Component implements OnInit {
  @logType // apply property decorator
  public attr1: number;

  @logParam
  myMethod(fp: string, sp: number, tp: object, fop: any) {

  }

  ngOnInit() {
    const injector = AppModule.injector;
  }

  constructor(service: Data4Service) {

  }
}

function logType(target: any, key: string) {
  const t = Reflect.getMetadata('design:type', target, key);
  console.log(`logType: ${key} type: ${t.name}`);
}

function logParam(target: any, key: string) {
  const types = Reflect.getMetadata('design:paramtypes', target, key);

  const s = types.map(type => type.name).join(';');
  console.log(`logParam: '${key}' param types: ${s}`);
}


function logLifeCycles(constructor: any) {
  const component = constructor.name;

  const original = constructor.prototype['ngOnInit']; // get the original method mgOnInit

  constructor.prototype['ngOnInit'] = function (...args) {
    console.log(`logLifeCycles: \`c ${component} - ngOnInit\`,  ${args}`);
    original && original.apply(this, args); // check if exists then call ngOnInit
  };
}

export function logInjectable(constructor: any) {
    setTimeout(x => {
      const injector = AppModule.injector;
      const service = injector.get(Data4Service);
      console.dir(service.getData());
    }, 0);
}

function timeout(milliseconds: number = 0) {
  return function (target: any, key: string, descriptor: any) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  };


}
