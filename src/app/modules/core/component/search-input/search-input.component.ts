import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  value: string;
  @Input()
  inputType = 'text';
  @Input()
  placeholder: string;
  @Input()
  maxLength: number;
  @Input()
  disabled: boolean;
  @Input()
  clearBtn = true;
  @Output() searchFn = new EventEmitter<any>();
  @Output() changeFn = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchBlur() {
    // this.clearBtnState = false;
  }

  onSearchFocus() {
    // this.clearBtnState = true;
  }

  onSearchChange(e) {
    this.value = e;
    this.changeFn.emit(e);
  }

  onSearchSub() {
    this.searchFn.emit(this.value);
  }

  onClear(){
    console.log('onClear:');
    this.value = '';
  }
}
