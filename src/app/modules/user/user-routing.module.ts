import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LoginGuard} from './guards/login.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: {permission: ['user', 'home'], title: 'boss直聘-首页'}},
    ],
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
