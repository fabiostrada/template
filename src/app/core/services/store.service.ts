import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap } from 'rxjs';
import { AppConfig } from '../configs/app-config';
import { arrayToHash, getOrEmptyArray } from '../helpers/array.helper';
import { StoreItemDb } from '../models/api/store-item.db';
import { Article } from '../models/Article';
import { Hash } from '../models/hash';
import { StoreItem } from '../models/store-item';
import { ArticleService } from './article.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends HttpService {

  constructor(protected override appConfig: AppConfig,
              protected override httpClient: HttpClient,
              private articleService: ArticleService) { 
      super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
      return this.appConfig.endpoints.store.baseUrl;
  }

  public store(): Observable<Array<StoreItem>> {
      let callAllArticle: Observable<Array<Article>> = this.articleService.allArticles();
      let callStoreItems: Observable<Array<StoreItemDb>> = this.httpClient.get<Array<StoreItemDb>>(`${this.baseUrl}${this.serviceUrl()}`);
      return forkJoin([callAllArticle, callStoreItems])
        .pipe(switchMap(([articles, storeItemsDB]) => {
            let articoliHash: Hash<Article> = arrayToHash(articles);
            return of(StoreItem.build(getOrEmptyArray(storeItemsDB), articoliHash)); 
        }));
  }
  
}
