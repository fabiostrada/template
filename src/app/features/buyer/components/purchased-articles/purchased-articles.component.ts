import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { catchError, map, merge, Observable, of, startWith, switchMap } from 'rxjs';
import { Paginate } from 'src/app/core/models/pagination/paginate';
import { PurchasedArticle } from 'src/app/core/models/purchased-article';
import { PurchasedArticleService } from 'src/app/core/services/purchased_article.service';

@Component({
  selector: 'app-purchased-articles',
  templateUrl: './purchased-articles.component.html',
  styleUrls: ['./purchased-articles.component.scss']
})
export class PurchasedArticlesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'article.name', 'article.description', 'amount'];  
  data: Array<PurchasedArticle> = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private purchasedArticle: PurchasedArticleService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {    

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.purchasedArticle.getPurchasedArticles(new Paginate(this.paginator.pageIndex, 5))
          .pipe(catchError(() => of(null)));
          /*
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          )*/
        }),
        map(data => {          
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.totalCount;
          return data.items;
        }),
      )
      .subscribe(data => (this.data = data));
  }
}

