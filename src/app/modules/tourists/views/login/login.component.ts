import {Component, OnInit} from '@angular/core';
import {ToastService} from 'ng-zorro-antd-mobile';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import CommonApi from '../../../../api/common/CommonApi';
import {ArticleInterface} from '../../../../api/common/dataInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  contentDesc: string;
  value = '';
  error = true;
  modal = false;
  footer = [
    {
      text: '我已阅读',
      onPress: () => {
        this.modal = false;
      }
    }
  ];

  private commonApi;
  constructor(private toast: ToastService, private router: Router, private http: HttpClient) {
    this.commonApi = new CommonApi(http);
  }

  ngOnInit(): void {
  }

  inputErrorClick(e) {
    this.toast.info('请输入正确的手机号');
  }

  inputChange(e) {
    const value = e.replace(/\s/g, '');
    this.error = value.length < 11 && value.length > 0;
    this.value = e;
  }

  goToLoginByPass() {
    console.log('goToLoginByPass:');
  }

  goToLoginByWeChat() {
    // todo 微信登录
    console.log('goToLoginByWeChat:');
    this.toast.info('这里是微信登录');
  }

  goToLoginDesc() {
    console.log('goToLoginDesc:');
    this.commonApi.getArticle('userDesc').subscribe((res: ArticleInterface) => {
      this.contentDesc = res.content;
      this.modal = true;
    });
  }

  goToLoginStep2() {
    const relPhone = this.value.replace(/\s/g, '');
    const phoneId = relPhone.slice(relPhone.length - 4);
    if (relPhone.length < 11) {
      this.toast.info('请输入正确的手机号');
      return false;
    }
    console.log('goToLoginStep2:', phoneId);
    this.router.navigate(['/boss/tourists/loginStep2'], { queryParams: {phoneNum: relPhone}}).then();
  }
}
