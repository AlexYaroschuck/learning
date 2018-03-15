import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'dynamic',
  template: `
    <ng-template #helloTemplate></ng-template>

    <button (click)="createComponent('Alex')">Create Alex greeting</button>
    <button (click)="createComponent('Stas')">Create Stas greeting</button>
  `
})
export class DynamicComponent implements OnDestroy{
  @ViewChild('helloTemplate', {read: ViewContainerRef}) helloTemplate: ViewContainerRef;
  public componentRef: ComponentRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  public createComponent(name: string): void {
    // this.helloTemplate.clear();
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(DynamicHelloComponent);
    this.componentRef = this.helloTemplate.createComponent(factory);
    this.componentRef.instance.name = name;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}

@Component({
  selector: 'dynamic-hello',
  template: `<h1>hello {{name}}</h1>`
})
export class DynamicHelloComponent {
  @Input() name: string = 'Alex';
}

