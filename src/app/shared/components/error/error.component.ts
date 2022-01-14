import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input()
  public error!:string | undefined;

}
