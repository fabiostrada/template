import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { BaseModule } from 'src/app/core/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import { translateModule } from 'src/app/core/helpers/translate.helper';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ...translateModule
  ]
})
export class SellerModule extends BaseModule { 
  
  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
    super(translate, locale);
  }

}
