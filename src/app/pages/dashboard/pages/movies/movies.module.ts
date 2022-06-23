import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import {
  PanelContentModule
} from '../../../../components/panel-content/panel-content.module';
import {
  StructureContainerModule
} from '../../../../components/structure-container/structure-container.module';
import {
  ButtonBackModule
} from '../../../../components/button-back/button-back.module';
import { CardModule } from '../../components/card/card.module';
import {
  CardPanelModule
} from '../../../../components/card-panel/card-panel.module';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PanelContentModule,
    StructureContainerModule,
    ButtonBackModule,
    CardModule,
    CardPanelModule,
  ],
})
export class MoviesModule { }
