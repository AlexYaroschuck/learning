import {Injectable} from '@angular/core';

@Injectable()
export class Data2Service {
  public datas = [
    'Data2Service_1',
    'Data2Service_2',
    'Data2Service_3',
    'Data2Service_4'
  ];

  public getData(): Array<string> {
    return this.datas;
  }

  public addData(data: string): void {
    this.datas.push(data);
  }
}
