import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AreaPopupComponent} from './component/area-popup/area-popup.component';
import {FootNavComponent} from './component/foot-nav/foot-nav.component';
import {HeadPhotoComponent} from './component/head-photo/head-photo.component';
import {PullToRefreshBoxComponent} from './component/pull-to-refresh-box/pull-to-refresh-box.component';
import {SearchInputComponent} from './component/search-input/search-input.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {FormsModule} from '@angular/forms';
import {SecurityCodeComponent} from './component/security-code/security-code.component';

@NgModule({
  declarations: [
    AreaPopupComponent,
    FootNavComponent,
    HeadPhotoComponent,
    PullToRefreshBoxComponent,
    SearchInputComponent,
    SecurityCodeComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdMobileModule,
    FormsModule
  ],
  exports: [
    AreaPopupComponent,
    FootNavComponent,
    HeadPhotoComponent,
    PullToRefreshBoxComponent,
    SearchInputComponent,
    SecurityCodeComponent
  ]
})
export class CoreModule {
}
