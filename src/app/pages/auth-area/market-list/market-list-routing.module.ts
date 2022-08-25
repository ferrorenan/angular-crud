import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { MarketListComponent } from './market-list.component';

const routes: Routes = [
  {
    path: '',
    component: MarketListComponent,
    title: 'Lista de compra'
  },
  {
    path: 'novo',
    loadChildren: () => import('../movies-form/movies-form.module')
        .then(module => module.MoviesFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketListRoutingModule { }
