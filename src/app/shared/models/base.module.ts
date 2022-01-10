import { Inject, LOCALE_ID, Optional, SkipSelf } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AppConfig } from "src/app/core/configs/app-config";
import { environment } from "src/environments/environment";

export class BaseModule {
    constructor(translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
        translate.setDefaultLang('en');
        translate.use(locale);        
    }
}

export class BaseRootModule<T> extends BaseModule {

    constructor(@Optional() @SkipSelf() parentModule: T,
                translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
      if (parentModule) {
        throw new Error("Module is already loaded");
      }
      super(translate, locale);
    }

}