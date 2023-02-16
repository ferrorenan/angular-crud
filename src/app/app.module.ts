import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SetDomainInterceptor } from './interceptors/set-domain.interceptor';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MarketListStates } from './store/state/market-list.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'MarketList',
      disabled: environment.production,
    }),
    NgxsModule.forRoot([
      MarketListStates
    ], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetDomainInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
