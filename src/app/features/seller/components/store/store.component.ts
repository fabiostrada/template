import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
      this.articleService.allArticles().subscribe(console.log);
  }

}
