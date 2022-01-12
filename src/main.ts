import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppConfig } from './app/core/configs/app-config';
import { environment } from './environments/environment';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

const transformLocale = (locale: string) : string => {
  return locale.split('-')[0];
}

fetch(`/assets/configs/config.json?v=${environment.appVersion}`)
  .then(response => response.json())
  .then((config) => {

    if (environment.production) {
      enableProdMode();
    }

    registerLocaleData(localeIt);
    registerLocaleData(localeEn);
    registerLocaleData(localeFr);
    registerLocaleData(localeDe);

    let localeBrowser: string = transformLocale(navigator.language) || 'it';    
    
    platformBrowserDynamic([
      { provide: AppConfig, useValue: config },
      { provide: LOCALE_ID, useValue: localeBrowser }
    ]).bootstrapModule(AppModule)
      .catch(err => console.error(err));

});