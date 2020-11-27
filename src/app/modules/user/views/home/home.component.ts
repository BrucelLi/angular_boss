import {Component, OnInit} from '@angular/core';
import {BottomNavInterface} from '../../../../api/common/dataInterface';
import CommonApi from '../../../../api/common/CommonApi';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageId = 1;
  bottomNavData: BottomNavInterface[] = [];
  private commonApi;

  constructor(private http: HttpClient) {
    this.commonApi = new CommonApi(http);
  }

  ngOnInit(): void {
    this.commonApi.getBottomNav().subscribe((res: BottomNavInterface[]) => {
      this.bottomNavData = res;
    });
  }

  navClick(id: number): void {
    this.pageId = id;
  }
}
