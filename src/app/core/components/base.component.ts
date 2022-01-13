import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Exception } from '../models/error.module';
@Component({
  selector: 'hello',
  template: ''
})
export abstract class BaseComponent implements OnDestroy {

  protected unsubscribeAll: Subject<any> = new Subject();

  public error?: Exception;

  constructor() { }

  ngOnDestroy(): void {
      this.unsubscribeAll.next(0);
      this.unsubscribeAll.complete();
  }

}