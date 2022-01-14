import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { BaseModule } from 'src/app/core/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import { translateModule } from 'src/app/core/helpers/translate.helper';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { StoreComponent } from './components/store/store.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ...translateModule,
    ...MaterialModule
  ],
  providers: [    
  ]
})
export class SellerModule extends BaseModule { 
  
  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
    super(translate, locale);
  }

}
