import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageInteractInterface, MessageListItemInterface} from '../../../../api/message/dataInterface';
import MessageApi from '../../../../api/message/MessageApi';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  notifyNum = '99+';
  changeState = {
    pageNum: 1,
    tagPageNum: 1,
    searchNum: 1,
    searchTagNum: 1,
  };
  noticeContent = '我是小黄条，小黄条的小，小黄条的黄！！！我是小黄条，小黄条的小，小黄条的黄！！！我是小黄条，小黄条的小，小黄条的黄！！！';
  messageData: MessageListItemInterface[] = [];
  messageInteractData: MessageInteractInterface[] = [];
  messageApi;

  constructor(private http: HttpClient) {
    this.messageApi = new MessageApi(http);
  }

  ngOnInit(): void {
    this.onGetMessageList({page: 0, num: 20});
    this.onGetMessageInteractData({page: 0, num: 20});
  }

  onNotifyClick() {
    console.log('onNotifyClick:');
  }

  onHeadImgClick() {
    console.log('onHeadImgClick:');
    // todo 这里跳转公司的招聘简介
  }

  onTopNotify() {
    console.log('onTopNotify:');
  }

  onChangeState(changeName: string, changeNum: number = 1) {
    console.log('onChangeState:', changeName, changeNum);
    this.changeState[changeName] = changeNum;
  }

  goToChat() {
    console.log('goToChat:');
    // todo 这里跳转聊天的详情
  }

  onChangePage(num: number) {
    this.onChangeState('pageNum', num);
  }

  onGetMessageList(e: { page: number, num: number }) {
    console.log('onGetMessageList:', e);
    this.messageApi.getMessageDataList(e.page, e.num).subscribe((res: MessageListItemInterface[]) => {
      if (e.page === 0) {
        this.messageData = res;
      } else if (this.messageData.length > 0 && res.length > 0) {
        this.messageData = this.messageData.concat(res);
      }
      console.log('messageData:', this.messageData);
    });
  }
  onGetMessageInteractData(e: { page: number, num: number }) {
    console.log('onGetMessageInteractData:', e);
    this.messageApi.getMessageInteractData(e.page, e.num).subscribe((res: MessageInteractInterface[]) => {
      if (e.page === 0) {
        this.messageInteractData = res;
      } else if (this.messageInteractData.length > 0 && res.length > 0) {
        this.messageInteractData = this.messageInteractData.concat(res);
      }
      console.log('messageInteractData:', this.messageInteractData);
    });
  }
}
