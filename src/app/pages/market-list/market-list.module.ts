import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketListRoutingModule } from './market-list-routing.module';
import { MarketListComponent } from './market-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {
  PanelContentModule
} from '../../components/panel-content/panel-content.module';
import {
  StructureContainerModule
} from '../../components/structure-container/structure-container.module';
import {
  ButtonBackModule
} from '../../components/button-back/button-back.module';
import { CardModule } from '../../components/card/card.module';
import { CardPanelModule } from '../../components/card-panel/card-panel.module';
import { FabModule } from '../../components/fab/fab.module';
import {
  LoadingDataModule
} from '../../components/loading-data/loading-data.module';


@NgModule({
  declarations: [
      MarketListComponent
  ],
  imports: [
    CommonModule,
    MarketListRoutingModule,
    PanelContentModule,
    StructureContainerModule,
    ButtonBackModule,
    CardModule,
    CardPanelModule,
    FabModule,
    LoadingDataModule,
    NgxSkeletonLoaderModule,
  ],
})
export class MarketListModule { }
