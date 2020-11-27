import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-foot-nav',
  templateUrl: './foot-nav.component.html',
  styleUrls: ['./foot-nav.component.scss']
})
export class FootNavComponent implements OnInit {
  @Input()
  bottomNavData = [];
  selectIndex = 1;
  @Output() navClick = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
  }

  bottomNavClick(item): void {
    this.selectIndex = item.id;
    console.log('bottomNavClick:', item);
    this.navClick.emit(item.id);
  }
}
