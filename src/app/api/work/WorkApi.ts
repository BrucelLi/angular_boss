import {Observable} from 'rxjs';
import {WorksListItemInterface} from './dataInterface';
import {workList} from './data';
import {mock} from '../../decorators/';
import {HttpClient} from '@angular/common/http';

export default class WorkApi{
  constructor(private http: HttpClient) {
  }
  @mock(workList)
  getWorkLists(): Observable<Array<WorksListItemInterface>> {
    return this.http.get<Array<WorksListItemInterface>>('getWorkLists.php');
  }
}
