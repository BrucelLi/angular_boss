import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpService} from './modules/core/services/http/http.service';
import {UserModule} from './modules/user/user.module';
import {TouristsModule} from './modules/tourists/tourists.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    TouristsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
