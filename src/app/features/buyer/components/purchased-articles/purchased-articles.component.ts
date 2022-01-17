import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/core/models/pagination/paginate';
import { PurchasedArticleService } from 'src/app/core/services/purchased_article.service';

@Component({
  selector: 'app-purchased-articles',
  templateUrl: './purchased-articles.component.html',
  styleUrls: ['./purchased-articles.component.scss']
})
export class PurchasedArticlesComponent implements OnInit {

  constructor(private purchasedArticle: PurchasedArticleService) { }

  ngOnInit(): void {
    this.purchasedArticle.getPurchasedArticles(new Paginate(2, 5))
        .subscribe(console.log);
  }

}
