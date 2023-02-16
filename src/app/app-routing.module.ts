import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
        .then(module => module.HomeModule),
    pathMatch: 'full',
    data: {
      state: 'Home'
    }
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
        .then(module => module.AboutModule),
    data: {
      state: 'About'
    }
  },
  {
    path: 'market-list',
    loadChildren: () => import('./pages/market-list/market-list.module')
        .then(module => module.MarketListModule),
    data: {
      state: 'MarketList'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
