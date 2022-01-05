import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error("Core Module is already loaded");
      }
  }

  public static forRoot() {
      return {
          ngModule: CoreModule,
          providers: [

          ]
      }
  }

  public static forChild() {
    return {
        ngModule: CoreModule
    }
  }

  public static forTest() {
    return {
        ngModule: CoreModule,
        providers: [
            
        ]
    }
  }

}
