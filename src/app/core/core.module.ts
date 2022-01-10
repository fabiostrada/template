import { Inject, LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../shared/helpers/translate.helper';
import { BaseRootModule } from '../shared/models/base.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ...MaterialModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class CoreModule extends BaseRootModule<CoreModule> { 

  constructor(@Optional() @SkipSelf() parentModule: CoreModule,
              translate: TranslateService,
              @Inject(LOCALE_ID) locale: string) {
      super(parentModule, translate, locale);     
  }

  public static forRoot() {
      return {
          ngModule: CoreModule,
          providers: [            
          ]
      }
  }

  public static forChild() {
    return {
        ngModule: CoreModule,
        provides: [          
        ]
    }
  }

  public static forTest() {
    return {
        ngModule: CoreModule,
        providers: [            
        ]
    }
  }

}
