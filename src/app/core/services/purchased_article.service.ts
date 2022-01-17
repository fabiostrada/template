import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap } from 'rxjs';
import { AppConfig } from '../configs/app-config';
import { arrayToHash } from '../helpers/array.helper';
import { toResults } from '../helpers/results.helper';
import { PurchasedArticleApi } from '../models/api/purchased-article.api';
import { Article } from '../models/Article';
import { Hash } from '../models/hash';
import { Paginate } from '../models/pagination/paginate';
import { Results } from '../models/pagination/results';
import { PurchasedArticle } from '../models/purchased-article';
import { User } from '../models/user';
import { ArticleService } from './article.service';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasedArticleService extends HttpService {

  constructor(protected override appConfig: AppConfig,
              protected override httpClient: HttpClient,
              private articleService: ArticleService,
              private userService: UserService) { 
      super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
      return this.appConfig.endpoints.purchased_articles.baseUrl;
  }

  public getPurchasedArticles(paginate: Paginate): Observable<Results<PurchasedArticle>> {
      let user: User = this.userService.currentUserOrThrow();
      let callAllArticle: Observable<Array<Article>> = this.articleService.allArticles();
      let callPurchasedArticlesItems: Observable<HttpResponse<Array<PurchasedArticleApi>>>
       = this.httpClient.get<Array<PurchasedArticleApi>>(
         `${this.baseUrl}${this.serviceUrl()}?${paginate.toString()}&idUser=${user.id}`, {observe: 'response'});

      return forkJoin([callAllArticle, callPurchasedArticlesItems])
        .pipe(switchMap(([articles, responsePurchasedArticoles]) => {
            let articoliHash: Hash<Article> = arrayToHash(articles);
            let purchasedArticlesApi: Results<PurchasedArticleApi> =  toResults(responsePurchasedArticoles); 
            let results: Results<PurchasedArticle> 
              = new Results(purchasedArticlesApi.totalCount, PurchasedArticle.build(purchasedArticlesApi.items, articoliHash));           
            return  of(results);
        }));         
  }

  /*
        let callStoreItems2: Observable<HttpResponse<Array<StoreItemApi>>> 
      = this.httpClient.get<Array<StoreItemApi>>(`${this.baseUrl}${this.serviceUrl()}?idUser=${user.id}`, {observe: 'response'});
      callStoreItems2.subscribe(result => {
          console.log('RESULT', result, result.body, result.headers.get('cache-control'));
      })
  */

}
