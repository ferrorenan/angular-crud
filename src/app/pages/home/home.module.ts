import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  PanelContentModule
} from '../../components/panel-content/panel-content.module';
import {
  StructureContainerModule
} from '../../components/structure-container/structure-container.module';
import { IconModule } from '../../components/icon/icon.module';
import { LinkModule } from '../../components/link/link.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PanelContentModule,
    StructureContainerModule,
    IconModule,
    LinkModule,
  ],
})
export class HomeModule { }
