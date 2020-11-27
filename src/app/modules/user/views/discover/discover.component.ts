import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import DiscoverApi from '../../../../api/discover/discoverApi';
import {DiscoverListInterface, DiscoverNavInterface} from '../../../../api/discover/dataInterface';
import {LoginService} from '../../../core/services/login/login.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  getState = 1;
  notifyNum: string;
  discoverNav: DiscoverNavInterface[] = [];
  discoverListData: DiscoverListInterface[] = [];
  private discoverApi;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.discoverApi = new DiscoverApi(http);
  }

  ngOnInit(): void {
    // 初始化数据
    this.notifyNum = '99+';
    // 获取发现的nav
    this.discoverApi.getDiscoverNav().subscribe((res: DiscoverNavInterface[]) => {
      this.discoverNav = res;
    });
    // 获取发现的列表记录
    this.discoverApi.getDiscoverLists().subscribe((res: DiscoverListInterface[]) => {
      this.discoverListData = res;
    });
  }

  onSearchChange(event) {
    console.log('onSearchChange:', event);
  }

  onSearch(e) {
    console.log('onSearch:', e);
  }

  onNotify() {
    console.log('onNotify:');
  }

  onHeadImgClick() {
    console.log('onHeadImgClick:');
  }

  onChangeGetState() {
    this.loginService.login('lxl', '123');
    console.log('login userInfo:', this.loginService.getUser());
    this.getState++;
  }
}
