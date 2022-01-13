import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelMenuComponent } from './components/label-menu/label-menu.component';
import { ErrorComponent } from './components/error/error.component';
import { translateModule } from '../core/helpers/translate.helper';
import { BaseModule } from '../core/models/base.module';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LabelMenuComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ...translateModule
  ],
  exports: [
    LabelMenuComponent,
    ErrorComponent
  ]
})
export class SharedModule extends BaseModule { 

  constructor(translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
      super(translate, locale);
  }

}
