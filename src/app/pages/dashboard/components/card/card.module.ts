import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IconModule } from '../../../../components/icon/icon.module';



@NgModule({
  declarations: [
      CardComponent
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
