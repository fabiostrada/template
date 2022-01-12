import { Inject, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './core/configs/app-config';
import { environment } from 'src/environments/environment';
import { BaseRootModule } from './core/models/base.module';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { translateModule } from './core/helpers/translate.helper';


const AngularMaterial = [
  MatCardModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    ...AngularMaterial,    
    ...translateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule extends BaseRootModule<AppModule> { 

    constructor(@Optional() @SkipSelf() parentModule: AppModule,
                translate: TranslateService,
                @Inject(LOCALE_ID) locale: string,
                appConfig: AppConfig) {
      super(parentModule, translate, locale);
      if (!!environment && !environment.production) {
        console.log('Locale', locale);  
        console.log('environment', environment);    
        console.log('Configuration',appConfig);
      }
    }

}
