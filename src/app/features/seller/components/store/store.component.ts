import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntil, tap } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base.component';
import { StoreItem } from 'src/app/core/models/store-item';
import { StoreService } from 'src/app/core/services/store.service';
import { StoreItemDataSource } from '../../model/store.datasource';
 @Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent extends BaseComponent implements OnInit  {
  
  public displayedColumns: string[] = ['id', 'name', 'description', 'price', 'amount'];
  public dataSource!: MatTableDataSource<StoreItemDataSource>;    
  public paginator!: MatPaginator;
  public sort!: MatSort;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;       
    if (!!this.dataSource) {
      this.dataSource.paginator = this.paginator; 
    }        
  }

  @ViewChild(MatSort) set matSort(st: MatSort) {
    this.sort = st;    
    if (!!this.dataSource) {
      this.dataSource.sort = this.sort; 
    }  
  }

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

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }

}


