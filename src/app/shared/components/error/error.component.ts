import { Component, Input, OnInit } from '@angular/core';
import { Exception } from 'src/app/core/models/exception';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  @Input()
  public error!:Exception | undefined;

}
