import {Component, OnInit} from '@angular/core';
import {SearchTagInterface, HomeBtnDataInterface} from '../../../../api/common/dataInterface';
import CommonApi from '../../../../api/common/CommonApi';
import {WorksListItemInterface} from '../../../../api/work/dataInterface';
import WorkApi from '../../../../api/work/WorkApi';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../../core/services/login/login.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  searchTagData: SearchTagInterface[] = [];
  searchOrderData: SearchTagInterface[] = [];
  searchFilterData: SearchTagInterface[] = [];
  workListData: WorksListItemInterface[] = [];
  selectSearchTagIndex = 1;
  selectSearchOrderIndex = 1;
  state = {
    modal1: false
  };
  data = [];
  private commonApi;
  private workApi;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.commonApi = new CommonApi(http);
    this.workApi = new WorkApi(http);
  }

  ngOnInit(): void {
    // 获取页面的btn数据
    this.commonApi.getHomeData().subscribe((res: HomeBtnDataInterface) => {
      console.log('getHomeData:', res);
      if (res.searchTag) {
        this.searchTagData = res.searchTag;
      }
      if (res.searchOrder) {
        this.searchOrderData = res.searchOrder;
      }
      if (res.searchFilter) {
        this.searchFilterData = res.searchFilter;
      }
    });
    // 获取工作信息列表
    this.workApi.getWorkLists().subscribe((res: WorksListItemInterface[]) => {
      this.workListData = res;
    });
    this.addItems(0, 20);

    console.log('userInfo:', this.loginService.getUser());
  }

  loadList(event: any): void {
    this.addItems(event.page, event.num);
  }

  addItems(startIndex, pageLimit) {
    for (let i = startIndex; i < pageLimit * (startIndex + 1); i++) {
      this.data.push(i);
    }
  }

  headNavClick(item: SearchTagInterface): void {
    console.log('headNavClick:', item);
    this.selectSearchTagIndex = item.id;
  }

  headNavSearch(): void {
    console.log('headNavSearch:');
  }

  headNavAddTag(): void {
    console.log('headNavAddTag:');
  }

  worksOrderClick(item: SearchTagInterface): void {
    console.log('worksFilterClick:', item);
    this.selectSearchOrderIndex = item.id;
  }

  worksFilterClick(item: SearchTagInterface): void {
    console.log('worksFilterClick:', item);
    this.showModal('modal1');
    console.log('showModal:', this.state);
  }

  workListClick(item: WorksListItemInterface): void {
    console.log('worksFilterClick:', item);
  }

  onClose(key) {
    this.state[key] = false;
  }

  showModal(key) {
    this.state[key] = true;
  }
}
