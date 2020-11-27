import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, debounceTime, timeout, retryWhen, scan, delay, catchError, mergeMap} from 'rxjs/operators';
import {ToastService} from 'ng-zorro-antd-mobile';
import {environment} from '../../../../../environments/environment';

const ignoreToken: Array<string> = ['login', 'logout', 'table'];
const MAX_DEBOUNCE_TIME = 1000;
const DEFAULT_TIMEOUT = 5000;
const MAX_RETRY_COUNT = 3;

@Injectable({
  providedIn: 'root'
})
export class HttpService implements HttpInterceptor {
  constructor(private toast: ToastService) {
  }

  private toastFun(msg: string, time: number = 3000) {
    this.toast.info(msg, time);
  }

  private loadingFun(isShow: boolean = true) {
    if (isShow) {
      this.toast.loading('loading...', 0);
    } else {
      this.toast.hide();
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = environment.baseUrl + req.url;
    const needToken = ignoreToken.filter(u => url.match(u));
    // 过滤掉不需要token的请求
    if (needToken.length) {
      req = req.clone({
        url
      });
    } else {
      req = req.clone({
        url,
        setHeaders: {
          ver: '1.0.14',
          token: 'hello'
        }
      });
    }
    this.loadingFun();
    // @ts-ignore
    return next.handle(req).pipe(
      debounceTime(MAX_DEBOUNCE_TIME),
      timeout(DEFAULT_TIMEOUT),
      retryWhen(err$ => {
        return err$.pipe(
          scan((errCount, err) => {
            if (errCount >= MAX_RETRY_COUNT) {
              this.loadingFun(false);
              throw err;
            }
            return errCount + 1;
          }, 0),
          delay(1000),
          tap(errCount => {
            if (errCount === 1) {
              // 第一次失败提示
            }
          })
        );
      }),
      catchError((err: HttpErrorResponse) => {
        this.loadingFun(false);
        this.toastFun('网络超时' + err.name + err.message);
        return throwError('网络超时' + err.name + err.message);
      }),
      mergeMap((event: any) => {
        this.loadingFun(false);
        if (event instanceof HttpResponse && event.status !== 200) {
          // http code error
          this.toastFun('服务异常，请稍后再试');
          return Observable.create(event);
        }
        if (event instanceof HttpResponse && event.body.code !== 200) {
          // response code error
          const msg: string = event.body.msg ? event.body.msg : '服务异常, 未知错误';
          this.toastFun(msg);
          return Observable.create(event);
        }
        // 请求成功返回响应
        return Observable.create(observer => observer.next(event));
      })
    );
  }
}
