import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onHeadImgClick(){
    console.log('onHeadImgClick:');
  }
  onSaoYiSao(){
    console.log('onSaoYiSao:');
  }
  onSet(){
    console.log('onSet:');
  }
}
