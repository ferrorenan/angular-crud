import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContentComponent } from './panel-content.component';



@NgModule({
  declarations: [
      PanelContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelContentComponent
  ]
})
export class PanelContentModule { }
