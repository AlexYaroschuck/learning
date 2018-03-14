import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';

@Component({
  selector: 'app-animation',
  animations: [trigger('signal', [
    state('go', style({
      'background-color': 'green',
      'height': '100px'
    })),
    state('stop', style({
      'background-color': 'red',
      'height': '50px'
    })),
    transition('* => *', animate(500))
  ])],
  styles: [`.square {
    background-color: yellow;
    height: 100px;
    width: 100px;
  }`],
  template: `

    <div [@signal]="signal" class="square"></div>

    <button (click)="onGoClick()">Go</button>
    <button (click)="onStopClick()">Stop</button>
  `
})
export class AnimationComponent {
  signal;

  onGoClick() {
    this.signal = 'go';
  }

  onStopClick() {
    this.signal = 'stop';
  }
}
