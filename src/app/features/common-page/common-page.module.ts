import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { Page401Component } from './components/page401/page401.component';
import { BaseModule } from 'src/app/core/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import { translateModule } from 'src/app/core/helpers/translate.helper';


@NgModule({
  declarations: [
    Page401Component
  ],
  imports: [
    CommonModule,
    CommonPageRoutingModule,
    ...translateModule
  ]
})
export class CommonPageModule extends BaseModule { 

  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
    super(translate, locale);
  }
  
}
