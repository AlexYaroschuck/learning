import {Injectable} from '@angular/core';

@Injectable()
export class Data4Service {
  public datas = [
    'Data4 1',
    'Data4 2',
    'Data4 3',
    'Data4 4'
  ];

  public getData(): Array<string> {
    return this.datas;
  }

  public addData(data: string): void {
    this.datas.push(data);
  }
}
