import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'movies',
    loadChildren: () => import('../movies/movies.module')
        .then(module => module.MoviesModule),
    data: {
      animation: 'isRight'
    }
  },
  {
    path: 'lista',
    loadChildren: () => import('../market-list/market-list.module')
        .then(module => module.MarketListModule),
    data: {
      animation: 'isRight'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
