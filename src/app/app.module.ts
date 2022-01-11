import { Inject, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './shared/helpers/translate.helper';
import { AppConfig } from './core/configs/app-config';
import { environment } from 'src/environments/environment';
import { BaseRootModule } from './shared/models/base.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
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
