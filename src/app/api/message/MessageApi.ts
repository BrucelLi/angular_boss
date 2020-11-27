import {Observable} from 'rxjs';
import {MessageListItemInterface, MessageInteractInterface} from './dataInterface';
import {messageListData, messageInteractData} from './data';
import {mock} from '../../decorators/';
import {HttpClient} from '@angular/common/http';

export default class MessageApi{
  constructor(private http: HttpClient) {
  }
  @mock(messageListData)
  getMessageDataList(page: number = 1, pageNum: number = 20): Observable<Array<MessageListItemInterface>> {
    const body = JSON.stringify({page, pageNum});
    return this.http.post<Array<MessageListItemInterface>>('getMessageDataList.php', body);
  }
  @mock(messageInteractData)
  getMessageInteractData(page: number = 1, pageNum: number = 20): Observable<Array<MessageInteractInterface>> {
    const body = JSON.stringify({page, pageNum});
    return this.http.post<Array<MessageInteractInterface>>('getMessageInteractData.php', body);
  }
}
