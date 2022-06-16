import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPanelComponent } from './card-panel.component';



@NgModule({
  declarations: [
      CardPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardPanelComponent
  ]
})
export class CardPanelModule { }
