import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesFormComponent } from './movies-form.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesFormRoutingModule { }
