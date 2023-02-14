import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketListComponent } from './market-list.component';

const routes: Routes = [
  {
    path: '',
    component: MarketListComponent,
    title: 'CRUD - Your Market List items!'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketListRoutingModule { }
