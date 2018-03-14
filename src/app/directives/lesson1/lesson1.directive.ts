import {AfterViewInit, Component, Directive, ElementRef, HostBinding, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appLesson1]'
})
export class Lesson1Directive implements AfterViewInit {

  constructor(private el: ElementRef, private template: TemplateRef<any>, private view: ViewContainerRef) {

  }

  ngAfterViewInit(): void {
    this.view.createEmbeddedView(this.template, {
      $implict: 'Content'
    });
  }

}

@Component({
  selector: 'basic',
  template: `
    <div *appLesson1>{{content}}</div>`
})
export class BasicComponent {

}
