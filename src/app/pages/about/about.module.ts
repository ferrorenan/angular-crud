import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {
  PanelContentModule
} from '../../components/panel-content/panel-content.module';
import {
  StructureContainerModule
} from '../../components/structure-container/structure-container.module';
import { CardPanelModule } from '../../components/card-panel/card-panel.module';
import { IconModule } from '../../components/icon/icon.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PanelContentModule,
    StructureContainerModule,
    CardPanelModule,
    IconModule,
  ],
})
export class AboutModule { }
