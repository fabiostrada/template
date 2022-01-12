import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BaseModule } from 'src/app/shared/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import {  translateModule } from 'src/app/shared/helpers/translate.helper';
import { MaterialModule } from './material.module';
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
    ...translateModule
  ]
})
export class LoginModule extends BaseModule { 

    constructor(translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
        super(translate, locale);
    }
    
}
