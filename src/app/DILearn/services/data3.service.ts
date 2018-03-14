export class Data3Service {
  public datas = [
    'Data3Service_1',
    'Data3Service_2',
    'Data3Service_3',
    'Data3Service_4'
  ];

  public getData(): Array<string> {
    return this.datas;
  }

  public addData(data: string): void {
    this.datas.push(data);
  }
}
