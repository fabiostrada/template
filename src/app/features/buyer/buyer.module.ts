import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BaseModule } from 'src/app/shared/models/base.module';
import { translateModule } from 'src/app/shared/helpers/translate.helper';
import { TranslateService } from '@ngx-translate/core';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    ...translateModule     
  ]
})
export class BuyerModule extends BaseModule { 

  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
    super(translate, locale);
  }

}
