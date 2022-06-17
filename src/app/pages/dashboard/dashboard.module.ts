import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
  PanelContentModule
} from '../../components/panel-content/panel-content.module';
import { BoardComponent } from './components/board/board.component';
import { CardPanelModule } from '../../components/card-panel/card-panel.module';
import {
  StructureContainerModule
} from '../../components/structure-container/structure-container.module';


@NgModule({
  declarations: [
      DashboardComponent,
      BoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelContentModule,
    CardPanelModule,
    StructureContainerModule,
  ],
})
export class DashboardModule { }
