import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonGuard} from './guards/common.guard';
const routes: Routes = [
  { path: '', redirectTo: 'boss/user', pathMatch: 'full'},
  { path: 'boss', canActivate: [CommonGuard], children: [
      { path: 'tourists', loadChildren: './modules/tourists/tourists.module#TouristsModule'},
      { path: 'user', loadChildren: './modules/user/user.module#UserModule'},
    ]
  },
  // todo 这里处理404页面的路由
  // {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
