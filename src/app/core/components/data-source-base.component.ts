import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BaseComponent } from "./base.component";


@Component({
  selector: 'data-source-base-component',
  template: ''
})
export abstract class DataSourceBaseComponent<T> extends BaseComponent {

  public dataSource!: MatTableDataSource<T>;    
  public paginator!: MatPaginator;
  public sort!: MatSort;
  public abstract displayedColumns: string[];

  constructor() {
    super();
  }

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

  public applyFilter(event: Event) {
    let filterValue: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
  }
  
}