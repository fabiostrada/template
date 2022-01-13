import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoleType } from './core/configs/app-roles';
import { AppRoutings } from './core/configs/app-routing';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { AuthorizationGuard } from './core/guards/authorization.guard';
import { ExistUser } from './core/guards/exist-user.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: AppRoutings.commonpage,
    loadChildren: () => import('./features/common-page/common-page.module').then(res => res.CommonPageModule)
  },
  {
    path: AppRoutings.login,
    loadChildren: () => import('./features/login/login.module').then(res => res.LoginModule),
    canActivate: [ExistUser],
    canLoad: [ExistUser]
  },
  {
    path: AppRoutings.admin,
    loadChildren: () => import('./features/admin/admin.module').then(res => res.AdminModule),
    canLoad: [AuthenticationGuard, AuthorizationGuard],
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data:{
      roles:[RoleType.ADMIN]  
    }
  },
  {
    path: AppRoutings.seller,
    loadChildren: () => import('./features/seller/seller.module').then(res => res.SellerModule),
    canLoad: [AuthenticationGuard, AuthorizationGuard],
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data:{
      roles:[RoleType.SELLER]  
    }
  },
  {
    path: AppRoutings.buyer,
    loadChildren: () => import('./features/buyer/buyer.module').then(res => res.BuyerModule),
    canLoad: [AuthenticationGuard, AuthorizationGuard],
    canActivate: [AuthenticationGuard, AuthorizationGuard],
    data:{
      roles:[RoleType.BUYER]  
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
