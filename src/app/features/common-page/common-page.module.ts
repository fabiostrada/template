import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { Page401Component } from './components/page401/page401.component';


@NgModule({
  declarations: [
    Page401Component
  ],
  imports: [
    CommonModule,
    CommonPageRoutingModule
  ]
})
export class CommonPageModule { }
