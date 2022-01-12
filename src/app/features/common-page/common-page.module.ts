import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { Page401Component } from './components/page401/page401.component';
import { BaseModule } from 'src/app/shared/models/base.module';
import { TranslateService } from '@ngx-translate/core';


@NgModule({
  declarations: [
    Page401Component
  ],
  imports: [
    CommonModule,
    CommonPageRoutingModule
  ]
})
export class CommonPageModule extends BaseModule { 

  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
    super(translate, locale);
  }
  
}
