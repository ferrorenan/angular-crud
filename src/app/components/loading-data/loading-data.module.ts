import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDataComponent } from './loading-data.component';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [
      LoadingDataComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
  ],
  exports: [
    LoadingDataComponent
  ]
})
export class LoadingDataModule { }
