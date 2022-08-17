import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
  PanelContentModule
} from '../../../components/panel-content/panel-content.module';
import {
  CardPanelModule
} from '../../../components/card-panel/card-panel.module';
import {
  StructureContainerModule
} from '../../../components/structure-container/structure-container.module';
import {
  DefaultButtonLinkModule
} from '../../../components/default-button-link/default-button-link.module';
import { BoardModule } from '../../../components/board/board.module';


@NgModule({
  declarations: [
      DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelContentModule,
    CardPanelModule,
    StructureContainerModule,
    DefaultButtonLinkModule,
    BoardModule
  ],
})
export class DashboardModule { }
