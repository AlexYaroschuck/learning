import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Interceptor1 implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({setHeaders: {'my-header-1': '1'}});
    return next.handle(modifiedRequest);
  }
}

@Injectable()
export class Interceptor2 implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({setHeaders: {'my-header-2': '2'}});
    return next.handle(modifiedRequest);
  }
}

@Component({
  selector: 'interceptor-test',
  template: `
    <button (click)="sendGet()">Send Get Request</button>`
})
export class InterceptorExamples1Component {

  constructor(private http: HttpClient) {
  }

  public sendGet(): void {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const resp = this.http.request('GET', url, ).map(x => x).toPromise();
  }
}
