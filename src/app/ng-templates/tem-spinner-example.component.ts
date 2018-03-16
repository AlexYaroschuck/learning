import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'tem-spinner-ex',
  template: `
    <div *ngIf="!isLoading else spinner">
      <template-params></template-params>
    </div>

    <ng-template #spinner>
      <div>this is spinner</div>
    </ng-template>

    <ng-container *ngTemplateOutlet="spinner"></ng-container>
    <ng-container #spinnerContainer></ng-container>
  `
})
export class TemSpinnerExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('spinnerContainer', {read: ViewContainerRef}) spinnerContainer: ViewContainerRef;
  @ViewChild('spinner') spinnerTemplate: TemplateRef<any>;

  public isLoading = true;

  public ngOnInit(): void {
    setTimeout(x => this.isLoading = false, 2000);
  }

  public ngAfterViewInit() {
    const view = this.spinnerTemplate.createEmbeddedView(null);

    this.spinnerContainer.insert(view);
  }
}

@Component({
  selector: 'template-params',
  template: `
    <ng-template #myTemplate let-stringParam="str">
      this is string param: {{stringParam}}
    </ng-template>

    <ng-container *ngTemplateOutlet="myTemplate;context:{str: 'hello'}"></ng-container>`
})
export class TemplateParamsComponent {


}
