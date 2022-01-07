import { Component, Inject, LOCALE_ID } from '@angular/core';
import { AppConfig } from './core/config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  constructor(private appConfig: AppConfig,
             @Inject(LOCALE_ID) locale: string) {
      console.log('Configuration',appConfig);
      console.log('Locale', locale);
  }

}
