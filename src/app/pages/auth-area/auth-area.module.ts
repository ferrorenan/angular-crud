import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthAreaRoutingModule } from './auth-area-routing.module';
import { AuthAreaComponent } from './auth-area.component';
import {
  ButtonBackModule
} from '../../components/button-back/button-back.module';


@NgModule({
  declarations: [
      AuthAreaComponent
  ],
  imports: [
    CommonModule,
    AuthAreaRoutingModule,
    ButtonBackModule,
  ],
})
export class AuthAreaModule { }
