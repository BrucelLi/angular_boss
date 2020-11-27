import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from 'ng-zorro-antd-mobile';
import {HttpClient} from '@angular/common/http';
import CommonApi from '../../../../api/common/CommonApi';
import {SendMsgInterface} from '../../../../api/common/dataInterface';
import {LoginService} from '../../../core/services/login/login.service';

@Component({
  selector: 'app-login-step2',
  templateUrl: './login-step2.component.html',
  styleUrls: ['./login-step2.component.scss']
})
export class LoginStep2Component implements OnInit {
  phoneNum: string;
  times = 59;
  timer;
  private commonApi;

  constructor(
    private routeInfo: ActivatedRoute,
    private toast: ToastService,
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router
  ) {
    routeInfo.queryParams.subscribe(queryParams => {
      console.log('query:', queryParams);
      this.phoneNum = queryParams.phoneNum;
    });
    this.commonApi = new CommonApi(http);
  }

  ngOnInit(): void {
    this.msgTimer();
  }

  onInput(code: string) {
    console.log('login onInput:', code);
  }

  msgTimer() {
    this.timer = setInterval(() => {
      this.times = this.times - 1;
      if (this.times <= 0) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  sendMsg() {
    if (this.times <= 0) {
      console.log('sendMsg:');
      this.commonApi.sendMsg(this.phoneNum).subscribe((res: SendMsgInterface) => {
        if (res.sendState) {
          this.toast.info('短信验证码已经发送成功，请注意查收');
        } else {
          this.toast.info('短信验证码已经发送失败，请稍后再试');
        }
        this.times = 59;
        this.msgTimer();
      });
    }
  }

  onLogin() {
    console.log('service:', this.loginService.login('lxl', '123'));
    this.loginService.login('lxl', '123').subscribe((res: boolean) => {
      console.log('onLogin:', res);
      if (res) {
        this.router.navigate(['/boss/user/home']).then();
      }
    });
  }

  voiceCode() {
    this.toast.info('语音短信');
  }
}
