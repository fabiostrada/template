import { AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
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
export class StoreComponent extends BaseComponent implements OnInit, AfterContentInit  {
  
  public displayedColumns: string[] = ['id', 'name', 'description', 'price', 'amount'];
  public dataSource!: MatTableDataSource<StoreItemDataSource>;

  paginator!: MatPaginator;
  sort!: MatSort;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;        
  }

  @ViewChild(MatPaginator) set matSort(st: MatSort) {
    this.sort = st;    
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
              this.dataSource.paginator = this.paginator;  
              this.dataSource.sort = this.sort;
          })
        ).subscribe();   
  }

  ngAfterContentInit(): void {

  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }

}


