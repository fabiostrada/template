import { Inject, LOCALE_ID, Optional, SkipSelf } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AppLanguage } from "src/app/config/app-language";

export class BaseModule {
    constructor(translate: TranslateService,
                @Inject(LOCALE_ID) locale: string) {
        translate.setDefaultLang(AppLanguage.DEFAULT_LANGUAGE);
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