import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    title: 'Movies'
  },
  {
    path: 'novo',
    loadChildren: () => import('../movies-form/movies-form.module')
        .then(module => module.MoviesFormModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('../movies-form/movies-form.module')
        .then(module => module.MoviesFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
