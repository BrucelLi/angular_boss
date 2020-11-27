import {Observable} from 'rxjs';
import {
  AreaInterface,
  HomeBtnDataInterface,
  BottomNavInterface,
  UserInfoInterface,
  ArticleInterface,
  SendMsgInterface,
  LogOutInterface
} from './dataInterface';
import {areaData, articleData, bottomNavData, homeBtnData, logOutData, sendMsgData, userInfoData} from './data';
import {mock} from '../../decorators/';
import {HttpClient} from '@angular/common/http';

export default class CommonApi {
  constructor(private http: HttpClient) {
  }

  @mock(areaData)
  getArea(): Observable<Array<AreaInterface>> {
    return this.http.get<Array<AreaInterface>>('getArea.php');
  }

  @mock(homeBtnData)
  getHomeData(): Observable<HomeBtnDataInterface> {
    return this.http.get<HomeBtnDataInterface>('getHomeData.php');
  }

  @mock(bottomNavData)
  getBottomNav(): Observable<Array<BottomNavInterface>> {
    return this.http.get<Array<BottomNavInterface>>('getBottomNav.php');
  }

  @mock(userInfoData)
  loginApi(name: string, pwd: string): Observable<Array<UserInfoInterface>> {
    const body = JSON.stringify({name, pwd});
    return this.http.post<Array<UserInfoInterface>>('login.php', body);
  }

  @mock(logOutData)
  logOutApi(name: string): Observable<LogOutInterface> {
    const body = JSON.stringify({name});
    return this.http.post<LogOutInterface>('logOut.php', body);
  }

  @mock(articleData)
  getArticle(name: string): Observable<ArticleInterface> {
    const body = JSON.stringify({name});
    return this.http.post<ArticleInterface>('getArticle.php', body);
  }

  @mock(sendMsgData)
  sendMsg(phone): Observable<SendMsgInterface> {
    const body = JSON.stringify({phone});
    return this.http.post<SendMsgInterface>('sendMsg.php', body);
  }
}
