import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/home/home.module')
        .then(module => module.HomeModule),
    title: 'Welcome'
  },
  {
    path: '',
    loadChildren: () => import('./pages/auth-area/auth-area.module')
        .then(module => module.AuthAreaModule),
    title: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
