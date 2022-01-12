import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelMenuComponent } from './components/label-menu/label-menu.component';

@NgModule({
  declarations: [
    LabelMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelMenuComponent
  ]
})
export class SharedModule { }
