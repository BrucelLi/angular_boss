import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-area-popup',
  templateUrl: './area-popup.component.html',
  styleUrls: ['./area-popup.component.scss']
})
export class AreaPopupComponent implements OnInit {
  @Input() data = [];
  @Input() value = ['商圈', '成都', '全成都'];
  constructor() { }

  ngOnInit(): void {
  }
  onChange(result) {
    console.log('onChange value: ', this.value, result);
    console.log('onChange result: ', result);
  }
  onClearClick() {
    this.value = ['商圈', '成都', '全成都'];
  }
  onSureClick() {
    console.log('onSureClick');
  }
}
