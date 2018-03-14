import {Component} from '@angular/core';

@Component({
  selector: 'dec-example1',
  template: `hello, i'm decorator example, see into the console<br>
  ****
  <button (click)="foo(2)">Log</button>
  <button (click)="testConst(2,3)">Property</button>`,
})
@logClass
export class DecExample1Component {

  @logProperty
  public name: string;

  public surname: string;

  testConst(name: string, surname: string) {
    this.name = name;
    this.surname = surname;

    const t = this.name;
  }

  @log
  foo(n: number) {
    return n * 2;
  }
}

// method decorator
function log(target: any, key: string, descriptor: any) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const a = args.map(a => JSON.stringify(a)).join(';');
    const result = originalMethod.apply(this, args);
    const r = JSON.stringify(result);
    console.log(`Call: ${key}(${a}) => ${r}`);
    return result;

  };

  return descriptor;
}

// property decorator
function logProperty(target: any, key: string) {
  let _val = target[key]; // property value

  const getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  const setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  // Delete property.
  if (delete target[key]) {
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

function logClass(target: any) {
  const originalConstructor = target;

  // function construct(constructor, args) {
  //   const c: any = function () {
  //     return constructor.apply(this, args);
  //   };
  //
  //   c.prototype = constructor.prototype;
  //
  //   return new c();
  // }

  const f: any = function (...args) {
    console.log(`New: ${originalConstructor.name}`);
  };

  f.prototype = originalConstructor.prototype;

  return f;
}

