import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from './ngx-audio-player/ngx-audio-player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
