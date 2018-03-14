import {ConsoleService} from './console.service';


export class LogDebug {
  constructor(public enabled: boolean, public consoleService: ConsoleService) {

  }

  log(message: string): void {
    if (this.enabled)
      this.consoleService.log(`LOG: ${message}`);
  }
}
