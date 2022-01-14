import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntil, tap } from 'rxjs';
import { DataSourceBaseComponent } from 'src/app/core/components/data-source-base.component';
import { StoreItem } from 'src/app/core/models/store-item';
import { StoreService } from 'src/app/core/services/store.service';
import { StoreItemDataSource } from '../../model/store.datasource';
 @Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent extends DataSourceBaseComponent<StoreItemDataSource> implements OnInit  {
  
  public displayedColumns: string[] = ['id', 'name', 'description', 'price', 'amount'];

  constructor(private storeService: StoreService) {
    super();           
  }

  ngOnInit(): void {
    this.storeService.store()
        .pipe(
          takeUntil(this.unsubscribeAll),
          tap((storeItems: Array<StoreItem>) => {
              let storeItemsDataSource: Array<StoreItemDataSource> = StoreItemDataSource.build(storeItems);
              this.dataSource = new MatTableDataSource(storeItemsDataSource);              
          })
        ).subscribe();   
  }

}


