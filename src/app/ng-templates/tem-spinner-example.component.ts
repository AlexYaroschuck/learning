import {Component, OnInit} from '@angular/core';

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
  `
})
export class TemSpinnerExampleComponent implements OnInit {
  public isLoading = true;

  public ngOnInit(): void {
    setTimeout(x => this.isLoading = false, 2000);
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
