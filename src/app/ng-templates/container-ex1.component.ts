import {Component} from '@angular/core';

@Component({
  selector: 'container-ex1',
  template: `
    <div class="myClass">
      some text
      <span *ngIf="showHello">Hello</span>
      <span *ngIf="!showHello">Good Bye</span>
      another text
    </div>

    <div (click)="showSolution = !showSolution">Show solution</div>

    <div class="myClass" *ngIf="showSolution">
      some text
      <ng-container *ngIf="showHello">Hello</ng-container>
      <ng-container *ngIf="!showHello">Good Bye</ng-container>
      another text
    </div>
    <br>
    <br>
    <div (click)="showSelect = !showSelect">Show Another Sample</div>

    <select *ngIf="showSelect">
      <option *ngFor="let option of options" >{{option}}</option> <!--*ngIf="option != 'kitchen'"-->
    </select>
    
    <select *ngIf="showSelect">
      <ng-container *ngFor="let option of options">
        <option *ngIf="option != 'kitchen'">{{option}}</option>
      </ng-container>
    </select>
  `,
  styles: [`.myClass span {
    color: red;
  }`]
})
export class Container1Ex1Component {
  public showHello = true;

  public showSolution = false;

  public showSelect = false;

  public options: string[] = ['I', 'you', 'we', 'they', 'us', 'kitchen'];
}
