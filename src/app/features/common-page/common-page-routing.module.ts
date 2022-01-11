import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page401Component } from './components/page401/page401.component';
import { CommonPageRouting } from './configs/common-page.routing';

const routes: Routes = [
  {
    path: CommonPageRouting.page401,
    component: Page401Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPageRoutingModule { }
