import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'label-menu',
  templateUrl: './label-menu.component.html',
  styleUrls: ['./label-menu.component.scss']
})
export class LabelMenuComponent {

  @Input()
  public preLabel?: string;

  @Input()
  public label!: string;

}
