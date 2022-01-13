import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AppConfig } from '../configs/app-config';
import { ArticleApi } from '../models/api/article.api';
import { Article } from '../models/Article';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService  extends HttpService {

  constructor(protected override appConfig: AppConfig,
              protected override httpClient: HttpClient) { 
      super(appConfig, httpClient);
  }

  protected serviceUrl(): string {
      return this.appConfig.endpoints.articles.baseUrl;
  }

  public allArticles(): Observable<Array<Article>> {
      return this.httpClient.get<Array<ArticleApi>>(`${this.baseUrl}${this.serviceUrl()}`)
                 .pipe(switchMap((articlesApi: Array<ArticleApi>) => {
                    return of(Article.arrayOf(articlesApi));
                 })) as Observable<Array<Article>>;
  }

  
}
