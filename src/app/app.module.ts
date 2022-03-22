import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from './app.component';
import { SocketIoModule } from 'ngx-socket-io';
import { SOCKET_CONFIG } from './modules/map/config/socket.config';
import {HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule,
    SocketIoModule.forRoot(SOCKET_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
