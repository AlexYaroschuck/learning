import {Component} from '@angular/core';


/**
 * The asterisk is "syntactic sugar" for something a bit more complicated.
 * Internally, Angular translates the *ngIf attribute into a <ng-template> element,
 * wrapped around the host element. @Angular doc
 *
 * <ng-template [ngIf]="false">
 * <div >U can't see me</div>
 * </ng-template>
 */

@Component({
  selector: 'template-ex1',
  template: `
    <div (click)="showIf = !showIf">ngIf:</div>
    <ng-template [ngIf]="showIf">
      <div *ngIf="false">U can't see me</div>
      <div>
        {{templateExample1.toString()}}
      </div>
    </ng-template>

    <br>
    <div (click)="showIf = false; showFor = !showFor">ngFor:</div>
    <ng-template [ngIf]="showFor">
      <div>
        {{tempateExample2_1.toString()}}
      </div>
      <br>
      <div>
        {{tempateExample2_2.toString()}}
      </div>
    </ng-template>

    <br>
    <div (click)="showMagic = !showMagic">Magic)</div>

    <ng-template [ngIf]="showMagic">
      <div>some content</div>
      <ng-template>some content</ng-template>
      <ng-template [ngIf]="true">some content</ng-template>
    </ng-template>

  `
})
export class TemplateEx1Component {
  templateExample1 = `<div *ngIf="false">U can't see me</div>  => 
    <ng-template [ngIf]="false">
    <div >U can't see me</div>
    </ng-template>`;

  tempateExample2_1 = `
  <div *ngFor="let data of someData; let i=index;">
  ({{i}}) {{data}}
  </div> 
  =>
  
`;
  tempateExample2_2 = `<ng-template ngFor let-data [ngForOf]="someData" let-i="index">
  <div >({{i}}) {{data}}</div>
  </ng-template>`;
  someData: string[] = ['1', '2', 'etc'];

  showIf = false;
  showFor = false;
  showMagic = false;

}
