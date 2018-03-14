export class Data1Service {
  public datas = [
    'Data1Service_1',
    'Data1Service_2',
    'Data1Service_3',
    'Data1Service_4'
  ];

  public getData(): Array<string> {
    return this.datas;
  }

  public addData(data: string): void {
    this.datas.push(data);
  }
}
