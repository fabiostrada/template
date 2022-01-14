import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../configs/app-config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasedArticleService extends HttpService {

  constructor(protected override appConfig: AppConfig,
              protected override httpClient: HttpClient) { 
      super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
      return this.appConfig.endpoints.purchased_articles.baseUrl;
  }
  
}
