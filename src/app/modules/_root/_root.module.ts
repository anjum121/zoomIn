import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rootComponent } from './_root.component';
import { AppRoutingModule } from '../../routing/app-routing.module';
import { VideoModule } from '../video/video.module';

@NgModule({
  imports: [
  CommonModule,
    AppRoutingModule,
    VideoModule,
    BrowserModule,
  ],
  declarations: [rootComponent],
  providers: [],
  bootstrap: [rootComponent]
})
// tslint:disable-next-line: class-name
export class rootModule { }
