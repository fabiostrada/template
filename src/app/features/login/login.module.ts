import { Inject, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BaseModule } from 'src/app/core/models/base.module';
import { TranslateService } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { translateModule } from 'src/app/core/helpers/translate.helper';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent, 
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ...MaterialModule,
    ...translateModule
  ]
})
export class LoginModule extends BaseModule { 

    constructor(translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
        super(translate, locale);
    }
    
}
