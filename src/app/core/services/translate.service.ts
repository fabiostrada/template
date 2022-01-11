import { Injectable, Injector } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { from, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConfig } from '../configs/app-config';

@Injectable({
  providedIn: 'root',
  deps:[AppConfig, Injector]
})
export class TranslateFactoryCustom implements TranslateLoader {

  constructor(private appConfig: AppConfig, private injector: Injector) { }

  getTranslation(lang: string): Observable<any> {
    return from(fetch(`/assets/i18n/unicredit/${lang}.json?v=${environment.appVersion}`).then(response => {
      return response.json();
    }));
  }
}

