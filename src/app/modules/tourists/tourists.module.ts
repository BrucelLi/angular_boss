import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';

import {TouristsRoutingModule} from './tourists-routing.module';
import {LoginComponent} from './views/login/login.component';
import {LoginStep2Component} from './views/login-step2/login-step2.component';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LoginStep2Component
  ],
  imports: [
    CommonModule,
    TouristsRoutingModule,
    NgZorroAntdMobileModule,
    CoreModule,
    FormsModule
  ]
})
export class TouristsModule {
}
