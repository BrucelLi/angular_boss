import {Injectable} from '@angular/core';
import CommonApi from '../../../../api/common/CommonApi';
import {LogOutInterface, UserInfoInterface} from '../../../../api/common/dataInterface';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userInfo: UserInfoInterface | null = null;
  private commonApi;

  constructor(private http: HttpClient) {
    this.commonApi = new CommonApi(http);
  }

  public login(name: string, pwd: string): Observable<boolean> {
    return this.commonApi.loginApi(name, pwd).pipe(
      tap((res: UserInfoInterface[]) => {
        if (name === 'llq') {
          this.userInfo = res[1];
        } else {
          this.userInfo = res[0];
        }
      }),
      mergeMap((res: UserInfoInterface[]) => {
        if (res.length > 0) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

  public logout(): void | Observable<boolean> {
    if (this.userInfo && this.userInfo.name) {
      this.commonApi.logOutApi(this.userInfo.name).pipe(
        tap((res: LogOutInterface) => {
          if (res.logOutState) {
            this.userInfo = null;
          }
        }),
        mergeMap((res: LogOutInterface) => {
          return of(res.logOutState);
        })
      );
    } else {
      return of(false);
    }
  }

  public isLogin(): boolean {
    return this.userInfo && this.userInfo.id > 0;
  }

  public getUser(): UserInfoInterface | null {
    return this.userInfo;
  }
}
