import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pull-to-refresh-box',
  templateUrl: './pull-to-refresh-box.component.html',
  styleUrls: ['./pull-to-refresh-box.component.scss']
})
export class PullToRefreshBoxComponent implements OnInit {
  @Input() data: any;
  @Output() getItemE = new EventEmitter<{ page: number, num: number }>();
  isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
  pageLimit = 20;
  page = 0;
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    direction: '',
    endReachedRefresh: false,
    height: 650,
    data: this.data,
    directionName: 'both up and down'
  };
  dtPullToRefreshStyle = {height: this.state.height + 'px'};

  constructor() {
  }

  ngOnInit(): void {
  }

  pullToRefresh(event): void {
    if (event === 'endReachedRefresh') {
      this.page++;
      this.getItem(this.page);
      this.state.refreshState.currentState = 'release';
      setTimeout(() => {
        this.state.refreshState.currentState = 'finish';
      }, 1000);
    } else {
      if (event === 'down') {
        this.state.data = [];
        this.page = 0;
        this.getItem(0);
      } else {
        this.page++;
        this.getItem(this.page);
      }
    }
  }

  getItem(startIndex = 0){
    this.getItemE.emit({page: startIndex, num: this.pageLimit});
  }
}
