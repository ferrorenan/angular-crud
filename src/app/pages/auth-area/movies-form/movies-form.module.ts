import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesFormRoutingModule } from './movies-form-routing.module';
import { MoviesFormComponent } from './movies-form.component';
import {
  FormModule
} from '../../../components/form-components/form/form.module';
import {
  StructureContainerModule
} from '../../../components/structure-container/structure-container.module';
import {
  CardPanelModule
} from '../../../components/card-panel/card-panel.module';
import {
  PanelContentModule
} from '../../../components/panel-content/panel-content.module';


@NgModule({
  declarations: [
      MoviesFormComponent
  ],
  imports: [
    CommonModule,
    MoviesFormRoutingModule,
    FormModule,
    StructureContainerModule,
    CardPanelModule,
    PanelContentModule,
  ],
})
export class MoviesFormModule { }
