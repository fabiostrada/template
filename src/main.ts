import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppConfig } from './app/core/config/app-config';
import { environment } from './environments/environment';

fetch(`/assets/configs/config.json?v=${environment.appVersion}`)
  .then(response => response.json())
  .then((config) => {

    if (environment.production) {
      enableProdMode();
    }
    
    platformBrowserDynamic([{provide: AppConfig, useValue: config}])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));

});


