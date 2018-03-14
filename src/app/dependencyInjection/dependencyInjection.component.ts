import {Component, OnInit} from '@angular/core';
import {FirstService} from './Services/FirstService';
import {SecondService} from './Services/SecondService';
import {LogDebug} from './Services/LogDebug';
import {ConsoleService} from './Services/console.service';


@Component({
  selector: 'app-di',
  template: `
    <div *ngFor="let t of dataService.getData()">{{t.name}}</div>`,
  providers: [
    {provide: FirstService, useClass: SecondService},
    ConsoleService,
    {
      provide: LogDebug,
      useFactory: (consoleService: ConsoleService) => {
        return new LogDebug(true, consoleService);
      },
      deps: [ConsoleService]
    }
  ]
})
export class DependencyInjectionComponent implements OnInit {

  constructor(public dataService: FirstService, public lg: LogDebug) {
  }

  ngOnInit() {
    this.lg.log('test');
  }
}
