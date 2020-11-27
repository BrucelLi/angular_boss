import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {HomeComponent} from './views/home/home.component';
import {DiscoverComponent} from './views/discover/discover.component';
import {WorksComponent} from './views/works/works.component';
import {CoreModule} from '../core/core.module';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {FormsModule} from '@angular/forms';
import { MessageComponent } from './views/message/message.component';
import { MyComponent } from './views/my/my.component';


@NgModule({
  declarations: [
    HomeComponent,
    DiscoverComponent,
    WorksComponent,
    MessageComponent,
    MyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    NgZorroAntdMobileModule,
    FormsModule
  ]
})
export class UserModule {
}
