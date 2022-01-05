import { Component } from '@angular/core';
import { AppConfig } from './core/config/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  constructor(private appConfig: AppConfig) {
      console.log(appConfig);
  }

}
