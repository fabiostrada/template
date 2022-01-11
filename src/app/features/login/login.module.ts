import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BaseModule } from 'src/app/shared/models/base.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/shared/helpers/translate.helper';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ...MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class LoginModule extends BaseModule { 

    constructor(translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
        super(translate, locale);
    }
    
}
