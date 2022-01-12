import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BaseModule } from 'src/app/core/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import { translateModule } from 'src/app/core/helpers/translate.helper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ...translateModule
  ]
})
export class AdminModule extends BaseModule { 

    constructor(translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
        super(translate, locale);
    }

}
