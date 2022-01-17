import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppConfig } from '../configs/app-config';
import { PurchasedArticleApi } from '../models/api/purchased-article.api';
import { Article } from '../models/Article';
import { Paginate } from '../models/pagination/paginate';
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

  public getPurchasedArticles(paginate: Paginate): Observable<Array<PurchasedArticle>> {
      let user: User = this.userService.currentUserOrThrow();
      let callAllArticle: Observable<Array<Article>> = this.articleService.allArticles();
      let callStoreItems: Observable<Array<PurchasedArticleApi>>
       = this.httpClient.get<Array<PurchasedArticleApi>>(`${this.baseUrl}${this.serviceUrl()}?idUser=${user.id}&${paginate.toString()}`);
      return of();
  }


}
