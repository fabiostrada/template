import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutings } from './config/app-routing';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  {
    path: AppRoutings.login,
    loadChildren: () => import('./features/login/login.module').then(res => res.LoginModule)
  },
  {
    path: AppRoutings.admin,
    loadChildren: () => import('./features/admin/admin.module').then(res => res.AdminModule),
    canLoad: [AuthenticationGuard],
    canActivate: [AuthenticationGuard]
  },
  {
    path: AppRoutings.seller,
    loadChildren: () => import('./features/seller/seller.module').then(res => res.SellerModule),
    canLoad: [AuthenticationGuard],
    canActivate: [AuthenticationGuard]
  },
  {
    path: AppRoutings.buyer,
    loadChildren: () => import('./features/buyer/buyer.module').then(res => res.BuyerModule),
    canLoad: [AuthenticationGuard],
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
