import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BaseModule } from 'src/app/core/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import { translateModule } from 'src/app/core/helpers/translate.helper';
import { PurchasedArticlesComponent } from './components/purchased-articles/purchased-articles.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    PurchasedArticlesComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    ...translateModule,
    ...MaterialModule     
  ]
})
export class BuyerModule extends BaseModule { 

  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
    super(translate, locale);
  }

}
