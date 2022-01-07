import { Component, Inject, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AppConfig } from './core/config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  constructor(private appConfig: AppConfig,
             @Inject(LOCALE_ID) private locale: string) {
    console.log('environment.production', environment.production, environment.appVersion);    
    console.log('Configuration',appConfig);
    console.log('Locale', locale);    
  }

}
