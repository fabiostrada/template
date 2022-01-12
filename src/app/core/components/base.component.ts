import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'hello',
  template: ''
})
export abstract class BaseComponent implements OnDestroy {

  protected unsubscribeAll: Subject<any> = new Subject();

  constructor() { }

  ngOnDestroy(): void {
      this.unsubscribeAll.next(0);
      this.unsubscribeAll.complete();
  }

}