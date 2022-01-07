import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutings } from './core/config/app-routing';

const routes: Routes = [
  {
    path: AppRoutings.loginModule.loginPage,
    loadChildren: () => import('./features/login/login.module').then(res => res.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
