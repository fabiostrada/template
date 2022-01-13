import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base.component';
import { ArticleService } from 'src/app/core/services/article.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent extends BaseComponent implements OnInit {

  constructor(private storeService: StoreService) {
      super();      
  }

  ngOnInit(): void {
      this.storeService.store().subscribe(console.log);
  }

}
