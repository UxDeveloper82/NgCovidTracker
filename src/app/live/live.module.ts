import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LivePageComponent } from './components/live-page/live-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LivePageComponent
  ],
  imports: [
    CommonModule,
    LiveRoutingModule,
    SharedModule
  ]
})
export class LiveModule { }
