import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {
  StructureContainerModule
} from '../../components/structure-container/structure-container.module';
import { IconModule } from '../../components/icon/icon.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    StructureContainerModule,
    IconModule,
  ],
})
export class AboutModule { }
