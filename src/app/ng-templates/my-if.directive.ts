import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {
  private isContentShown = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }

  @Input() set myIf(condition: boolean) {
    if (condition === true && !this.isContentShown) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isContentShown = true;
    } else if (condition === false && this.isContentShown) {
      this.viewContainerRef.clear();
      this.isContentShown = false;
    }
  }
}
