import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
  PanelContentModule
} from '../../components/panel-content/panel-content.module';
import { BoardComponent } from './components/board/board.component';


@NgModule({
  declarations: [
      DashboardComponent,
      BoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PanelContentModule,
  ],
})
export class DashboardModule { }
