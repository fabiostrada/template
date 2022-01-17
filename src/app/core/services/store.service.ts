import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap } from 'rxjs';
import { AppConfig } from '../configs/app-config';
import { arrayToHash, getOrEmptyArray } from '../helpers/array.helper';
import { StoreItemApi } from '../models/api/store-item.api';
import { Article } from '../models/Article';
import { Hash } from '../models/hash';
import { StoreItem } from '../models/store-item';
import { User } from '../models/user';
import { ArticleService } from './article.service';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends HttpService {

  constructor(protected override appConfig: AppConfig,
              protected override httpClient: HttpClient,
              private articleService: ArticleService,
              private userService: UserService) { 
      super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
      return this.appConfig.endpoints.store.baseUrl;
  }

  public store(): Observable<Array<StoreItem>> {
      let user: User = this.userService.currentUserOrThrow();
      let callAllArticle: Observable<Array<Article>> = this.articleService.allArticles();      
      let callStoreItems: Observable<Array<StoreItemApi>> 
      = this.httpClient.get<Array<StoreItemApi>>(`${this.baseUrl}${this.serviceUrl()}?idUser=${user.id}`);
      return forkJoin([callAllArticle, callStoreItems])
        .pipe(switchMap(([articles, storeItemsApi]) => {
            let articoliHash: Hash<Article> = arrayToHash(articles);
            return of(StoreItem.build(getOrEmptyArray(storeItemsApi), articoliHash)); 
        }));
  }
  
}
