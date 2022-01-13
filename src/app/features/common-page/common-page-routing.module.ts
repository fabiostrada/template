import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page401Component } from './components/page401/page401.component';
import { Page403Component } from './components/page403/page403.component';
import { Page404Component } from './components/page404/page404.component';
import { Page500Component } from './components/page500/page500.component';
import { CommonPageRouting } from './configs/common-page.routing';

const routes: Routes = [
  {
    path: CommonPageRouting.page401,
    component: Page401Component
  },
  {
    path: CommonPageRouting.page403,
    component: Page403Component
  },  
  {
    path: CommonPageRouting.page404,
    component: Page404Component
  },
  {
    path: CommonPageRouting.page500,
    component: Page500Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPageRoutingModule { }
