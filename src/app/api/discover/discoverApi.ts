import {Observable} from 'rxjs';
import {DiscoverNavInterface, DiscoverListInterface} from './dataInterface';
import {discoverListData, discoverNavData} from './data';
import {mock} from '../../decorators/';
import {HttpClient} from '@angular/common/http';

export default class DiscoverApi{
  constructor(private http: HttpClient) {
  }
  @mock(discoverNavData)
  getDiscoverNav(): Observable<Array<DiscoverNavInterface>> {
    return this.http.get<Array<DiscoverNavInterface>>('getDiscoverNav.php');
  }
  @mock(discoverListData)
  getDiscoverLists(): Observable<Array<DiscoverListInterface>> {
    return this.http.get<Array<DiscoverListInterface>>('getDiscoverLists.php');
  }
}
