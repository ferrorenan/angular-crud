import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketListRoutingModule } from './market-list-routing.module';
import { MarketListComponent } from './market-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {
  StructureContainerModule
} from '../../components/structure-container/structure-container.module';
import { CardModule } from '../../components/card/card.module';
import { FabModule } from '../../components/fab/fab.module';
import { OffcanvasModule } from '../../components/offcanvas/offcanvas.module';
import {
  PanelContentModule
} from '../../components/panel-content/panel-content.module';


@NgModule({
  declarations: [
      MarketListComponent
  ],
  imports: [
    CommonModule,
    MarketListRoutingModule,
    StructureContainerModule,
    CardModule,
    FabModule,
    NgxSkeletonLoaderModule,
    OffcanvasModule,
    PanelContentModule,
  ],
})
export class MarketListModule { }
