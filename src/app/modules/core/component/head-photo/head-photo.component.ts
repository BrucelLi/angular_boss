import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-photo',
  templateUrl: './head-photo.component.html',
  styleUrls: ['./head-photo.component.scss']
})
export class HeadPhotoComponent implements OnInit {
  @Input() width: number;
  @Input() imgUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

  dynamicStyles() {
    return {
      width: this.width + 'px',
      borderRadius: this.width / 2 + 'px'
    };
  }
}
