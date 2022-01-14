import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasedArticlesComponent } from './components/purchased-articles/purchased-articles.component';
import { buyerRouting } from './configs/buyer.routing';

const routes: Routes = [
  {
    path: buyerRouting.purchased_articles,
    component: PurchasedArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
