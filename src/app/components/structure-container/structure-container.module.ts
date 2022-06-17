import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureContainerComponent } from './structure-container.component';



@NgModule({
  declarations: [
      StructureContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructureContainerComponent
  ]
})
export class StructureContainerModule { }
