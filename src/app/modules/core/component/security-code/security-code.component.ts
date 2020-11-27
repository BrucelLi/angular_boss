import {Component, ElementRef, Input, OnInit, EventEmitter, Output} from '@angular/core';

interface CodeNumInterface {
  id: number;
  showState: boolean;
  value: string;
}

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrls: ['./security-code.component.scss']
})
export class SecurityCodeComponent implements OnInit {
  @Input()
  set num(value: number) {
    const arrayNum = value ? value : 4;
    this.codeNum = [];
    for (let i = 0; i < arrayNum; i++) {
      const tmpObj = {
        id: i + 1,
        showState: false,
        value: ''
      };
      this.codeNum.push(tmpObj);
    }
  }
  @Output() codeInput = new EventEmitter<string>();
  inputValue = '';
  codeNum: CodeNumInterface[] = [
    {
      id: 1,
      showState: false,
      value: ''
    },
    {
      id: 2,
      showState: false,
      value: ''
    },
    {
      id: 3,
      showState: true,
      value: ''
    },
    {
      id: 4,
      showState: false,
      value: ''
    }
  ];

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  onInputClick(item: CodeNumInterface) {
    this.codeNum.map((num) => {
      num.showState = (num.id === item.id && num.value === '');
    });
    const hiddenInput = this.el.nativeElement.querySelector('#boss-security-code-hidden-input');
    hiddenInput.focus();
  }

  onInput(e) {
    this.inputValue = e.target.value;
    this.codeNum.map((item) => {
      item.showState = (this.inputValue.length + 1) === item.id;
      item.value = this.inputValue.slice(item.id - 1, item.id);
    });
    this.codeInput.emit(this.inputValue);
  }
}
